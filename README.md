# Pop-Up Video 🎬

**Real-Time Abbreviation Detection for Shopify Calls**

An onboarding tool for new Shopifolk that listens to audio from Google Meet calls and displays real-time definitions when Shopify abbreviations are detected.

## Features

- 🎤 **Live Audio Detection** - Continuous speech recognition using the Web Speech API
- 📚 **200+ Shopify Terms** - Comprehensive dictionary of Shopify abbreviations and jargon
- 🔒 **Privacy First** - All audio is processed locally, nothing is sent to servers
- ⚡ **Real-time Results** - Instant detection and display of recognized terms
- 🌓 **Light/Dark Mode** - Automatically respects your system preference
- 👤 **Personalized Greeting** - Uses Quick Identity API to greet you by name

## Quick Start

### Prerequisites

- **Browser**: Chrome or Edge (required for Web Speech API support)
- **Microphone**: Required for audio capture
- **Quick CLI**: For deployment to Shopify's internal hosting

### Local Development

Simply open `index.html` in Chrome or Edge. The Quick API features will gracefully fall back when not deployed to Quick.

### Deployment to Quick

1. Install the Quick CLI if you haven't already:
   ```bash
   npm i -g @shopify/quick
   ```

2. Navigate to the project directory and deploy:
   ```bash
   cd "Pop-Up Video"
   quick deploy . popup-video
   ```

3. Your app will be live at:
   ```
   https://popup-video.quick.shopify.io
   ```

4. To update the site, just run the deploy command again:
   ```bash
   quick deploy . popup-video --force
   ```

## Usage

1. Open Pop-Up Video in a browser window
2. Click "Start Listening" to begin audio capture
3. Join or continue your Google Meet call in another window/tab
4. Position the Pop-Up Video window alongside your Meet call
5. As Shopify terms are mentioned, they'll appear in the detection feed

### Tips

- Keep the browser window open alongside your Google Meet
- The app detects terms from any audio your microphone picks up
- Duplicate terms are suppressed for 10 seconds to avoid spam
- Click the trash icon to clear the detection history
- Use the pause button if you need to temporarily stop listening

## File Structure

```
popup-video/
├── index.html      # Main HTML file with semantic structure
├── styles.css      # Styles with CSS variables for theming
├── app.js          # Core application logic
└── README.md       # This file
```

## Technical Details

### Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript (no build process)
- **Speech Recognition**: Web Speech API (SpeechRecognition)
- **Identity**: Quick API (quick.js)
- **Hosting**: Quick (quick.shopify.io)

### Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full support |
| Edge | ✅ Full support |
| Safari | ⚠️ Limited (no continuous recognition) |
| Firefox | ❌ Not supported |

### Abbreviation Matching

- Case-insensitive matching
- Word boundary detection (won't match partial words)
- 10-second duplicate prevention
- Handles both acronyms and multi-word phrases

## Privacy & Performance

- **Local Processing**: Audio is processed entirely in-browser using the Web Speech API
- **No Recording**: Audio is never stored or transmitted
- **Lightweight**: Total bundle size < 50KB
- **No Dependencies**: Only external dependency is the Quick API for identity

## Customization

### Adding New Abbreviations

Edit the `ABBREVIATIONS` object in `app.js`:

```javascript
const ABBREVIATIONS = {
    // ... existing entries
    "NEW": "Your new abbreviation definition here",
};
```

### Theming

CSS variables in `styles.css` control the color scheme:

```css
:root {
    --shopify-green: #008060;
    --bg-primary: #f9fafb;
    /* ... */
}
```

## Troubleshooting

### "Browser Not Supported" error
Use Chrome or Microsoft Edge. Firefox and Safari have limited or no support for the Web Speech API.

### "Microphone access was denied"
1. Click the lock/info icon in your browser's address bar
2. Find "Microphone" in the permissions
3. Set it to "Allow"
4. Refresh the page

### Terms not being detected
- Ensure the microphone is picking up the audio (check transcript preview)
- Speak clearly and at a normal pace
- Check that the term exists in the abbreviations dictionary

### Quick API not working
The Quick API only works when deployed to `*.quick.shopify.io`. For local development, the app will display "Welcome!" instead of a personalized greeting.

## Contributing

This is an internal Shopify tool. Feel free to submit PRs to add new abbreviations or improve the detection algorithm!

## License

Internal Shopify use only.

