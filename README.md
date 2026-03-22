# Coffee App

A simple Next.js application that allows users to track their daily coffee consumption with quick tap counters and basic analytics.

## Features

- **Quick Tracking**: Log your coffee with simple tap counters and timestamps
- **Cup Sizes**: Track different cup sizes (small, medium, large)
- **Analytics**: View weekly and monthly consumption trends
- **User Authentication**: Secure login and signup with Supabase
- **Responsive Design**: Works on desktop and mobile devices

## Problem Solved

Many coffee drinkers lose track of their daily consumption, making it difficult to understand their caffeine intake patterns and how it affects their health and sleep. Coffee App provides a simple solution to monitor coffee habits with insightful analytics.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database & Auth**: Supabase
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd coffee-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Supabase credentials in `.env.local`

4. **Run database migrations**
   ```bash
   npx supabase migration up
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── dashboard/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── supabase/
│       ├── client.ts
│       └── server.ts
├── supabase/
│   └── migrations/
└── middleware.ts
```

## Features In Scope

- ✅ Quick cup counter with +/- buttons
- ✅ Daily coffee log with timestamps
- ✅ Weekly/monthly consumption trends
- ✅ Simple statistics dashboard
- ✅ Basic cup size options (small, medium, large)

## Features Out of Scope

- ❌ Caffeine content calculations
- ❌ Social sharing features
- ❌ Integration with fitness trackers

## Success Metrics

- Daily active usage rate
- Average logging frequency per user
- User retention after 30 days

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.