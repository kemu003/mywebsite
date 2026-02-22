# EmailJS Setup Guide

Your Contact form is now connected to EmailJS to send emails directly to your Gmail inbox.

## ✅ Configuration Complete

Your EmailJS setup is ready with:
- **Service ID**: `service_zq70xgo` (Gmail)
- **Template ID**: `template_p2bk9dn` (Contact Us template)
- **Public Key**: `ZMNV_zUQol4VblVEt`
- **`.env` file**: Created with all credentials

Your template variables are mapped:
- `{{name}}` ← visitor's name
- `{{email}}` ← visitor's email
- `{{subject}}` ← visitor's subject
- `{{message}}` ← visitor's message

## Step 1: Restart Dev Server
```bash
npm run dev
```

## Step 2: Test
1. Fill out the contact form on your site
2. Click "Send Message"
3. Check your Gmail inbox for the email

## Troubleshooting
- **"undefined" errors**: Make sure `.env` variables match exactly (case-sensitive)
- **Email not received**: Check EmailJS template has correct variable names
- **CORS errors**: EmailJS handles this automatically with proper public key
- **500 emails/day limit**: You have 500 free emails per day from Gmail service

## Notes
- `.env` is in `.gitignore` — never commit real credentials
- The form clears after successful submission
- Errors are logged to browser console (F12 > Console)
