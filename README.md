# Stranger Chat

A simple web application that connects two strangers randomly for anonymous chatting without any sign-in required.

## Domain
https://strangerchat.co.in/

## Project Structure

This is a Vue.js application with a modern, responsive UI appealing to youth and teens.

## Frontend (stranger-chat-web)

The frontend is a Vue.js application with a modern, responsive UI appealing to youth and teens. Features include:

- Age verification with Terms of Use acceptance
- Dark theme by default with light/dark toggle
- Responsive design with ad spaces for desktop and mobile
- Username input with styled background
- Real-time chat with partner usernames displayed
- Mobile-friendly chat interface
- **Live user count display** showing number of online users
- Loading indicator while connecting to partner
- Single popup for username and connect
- System messages without usernames
- Compact message spacing in chat

### Features
- **Age Verification**: Must accept Terms of Use and confirm 18+ before connecting
- **Theme Toggle**: Switch between dark and light themes
- **Responsive Layout**: Ad spaces on desktop sides, mobile banners
- **Chat Interface**: Scrollable messages, partner usernames
- **User Input**: Styled input field with background
- **Skip Partner**: Disconnect and find new chat partner
- **Loading on Connect**: Shows loader until connected to partner
- **System Messages**: Automated messages shown as "System: message"
- **Compact Messages**: No vertical spacing between messages

### Tech Stack
- Vue.js 3
- Vite
- Socket.io-client
- CSS Grid/Flexbox for responsive design

### Environment Variables
Create a `.env` file in the root of the frontend project with:
```
VITE_SOCKET_URL=http://localhost:8080
```

For production deployment, update `VITE_SOCKET_URL` to your deployed backend URL (e.g., `https://strangerchat.co.in/`).

### Getting Started
1. Navigate to `stranger-chat-web/`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

**Deploy Command**: `npm run deploy` - Builds and starts a local preview server (port 4173)

## How It Works

1. User opens the web app and enters a username.
2. Frontend connects to the WebSocket server.
3. Server adds the user to a waiting queue.
4. When two users are waiting, they are randomly paired.
5. Messages are relayed between the paired users in real-time.
6. When a user disconnects, the pair is broken, and the other user is returned to the waiting queue.

## Deployment

This application can be deployed to any static site hosting platform that supports modern web applications.

### Recommended Platforms
- **Vercel**: Automatic deployments from GitHub
- **Netlify**: Great for static sites with form handling
- **Railway**: Full-stack support if backend is separate
- **GitHub Pages**: Free for public repositories

### Manual Deployment
Deploy to any hosting platform that supports:
- **Frontend**: Static site hosting (Netlify, Vercel, etc.)

See `deployment.md` for detailed deployment instructions.
