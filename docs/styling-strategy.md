# Styling Strategy

## Goal

The Iron Tigers website should keep its custom public-facing visual identity while still using Material UI where it provides practical value. The public site should continue to feel like an Iron Tigers robotics team website: dark, technical, orange-accented, energetic, and distinct from a generic template.

In plain terms: we are not trying to make every part of the website look like a default Material UI application. We are using Material UI as a helpful toolkit, not as a replacement for the team's brand.

## Public-facing site

The public-facing pages should preserve the custom Iron Tigers look and feel. This includes the current dark backgrounds, orange accents, technical typography, custom section layouts, hero styling, timeline design, and card treatments.

Sections such as the homepage hero, legacy timeline, team identity blocks, sponsor showcases, and other brand-heavy areas do not need to become Material UI components unless doing so clearly improves maintainability without changing the design.

This approach is useful because visitors should immediately recognize the site as belonging to the Iron Tigers, not as a generic web template.

## Where Material UI should be used

Material UI should be used selectively for components that benefit from consistency, accessibility, and built-in interaction patterns. Good candidates include:

- Forms
- Admin dashboard screens
- Tables
- Dialogs and modals
- Alerts and status messages
- Consistent interactive components such as buttons, menus, tabs, and inputs

These areas are usually more functional than brand-heavy. Material UI helps them stay polished, accessible, and easier to maintain.

## Example: Material UI components with Iron Tigers styling

The example below shows how Material UI can be used without losing the Iron Tigers style. It uses MUI form and feedback components while applying dark backgrounds, orange accents, and technical typography.

```tsx
import { Alert, Box, Button, TextField, Typography } from "@mui/material";

export function ContactFormExample() {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 640,
        p: 4,
        borderRadius: 2,
        bgcolor: "#201f1f",
        border: "1px solid #564334",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 2,
          color: "#ffb77d",
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
        }}
      >
        Contact Iron Tigers
      </Typography>

      <TextField
        fullWidth
        label="Your email"
        margin="normal"
        variant="outlined"
        sx={{
          input: { color: "#e5e2e1" },
          label: { color: "#ddc1ae" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#564334" },
            "&:hover fieldset": { borderColor: "#ff8c00" },
            "&.Mui-focused fieldset": { borderColor: "#ffb77d" },
          },
        }}
      />

      <TextField
        fullWidth
        multiline
        minRows={4}
        label="Message"
        margin="normal"
        variant="outlined"
        sx={{
          textarea: { color: "#e5e2e1" },
          label: { color: "#ddc1ae" },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#564334" },
            "&:hover fieldset": { borderColor: "#ff8c00" },
            "&.Mui-focused fieldset": { borderColor: "#ffb77d" },
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "#ff8c00",
          color: "#623200",
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          "&:hover": { bgcolor: "#ffb77d" },
        }}
      >
        Send Message
      </Button>

      <Alert
        severity="success"
        sx={{
          mt: 3,
          bgcolor: "#1c1b1b",
          color: "#e5e2e1",
          border: "1px solid #564334",
        }}
      >
        Example success message styled for the Iron Tigers theme.
      </Alert>
    </Box>
  );
}
```

## What should stay custom

Not every public-facing section needs to become a Material UI component. Custom sections should stay custom when they are central to the team's brand or when Material UI would make the page look too generic.

Examples of sections that can remain custom include:

- Homepage hero section
- Team identity and mission sections
- Legacy timeline
- Sponsor showcase layouts
- Highly visual robotics-themed cards
- Decorative gradients, overlays, and technical visual effects

## Decision rule

Use Material UI when it improves consistency, accessibility, or developer speed without weakening the Iron Tigers brand.

Keep custom styling when the section is part of the site's unique visual identity.

This gives the project the best of both approaches: a distinctive public website for the team and a professional component system for forms, admin tools, and interactive features.
