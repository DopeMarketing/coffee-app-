-- Create coffee logs table
CREATE TABLE coffee_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  cup_size TEXT NOT NULL CHECK (cup_size IN ('small', 'medium', 'large')),
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create index for user queries
CREATE INDEX idx_coffee_logs_user_id ON coffee_logs(user_id);

-- Create index for date-based queries
CREATE INDEX idx_coffee_logs_logged_at ON coffee_logs(logged_at);

-- Enable Row Level Security
ALTER TABLE coffee_logs ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to only access their own coffee logs
CREATE POLICY "Users can only access their own coffee logs" ON coffee_logs
  FOR ALL USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_coffee_logs_updated_at 
  BEFORE UPDATE ON coffee_logs 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();