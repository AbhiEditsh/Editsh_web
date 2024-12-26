import React from "react";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { styled } from "@mui/material/styles";

// Scroll to Top button styled div
const ScrollToTopButton = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(10), // Positioned slightly above the WhatsApp button
  right: theme.spacing(2),
  zIndex: 11,
}));

const WhatsAppButtonWrapper = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(1.5), // Positioned at the bottom
  right: theme.spacing(1.5),
  zIndex: 11,
}));

// Scroll to Top component
const ScrollToTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <ScrollToTopButton onClick={handleClick} role="presentation">
        {children}
      </ScrollToTopButton>
    </Zoom>
  );
};

// WhatsApp Button component
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+9196011 75985";
    const message = "Hello, I'm reaching out from your website!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <WhatsAppButtonWrapper>
      <WhatsAppIcon
        sx={{
          backgroundColor: "#25D366",
          color: "#fff",
          width: "50px",
          height: "50px",
          padding: "10px",
          borderRadius: "50%",
        }}
        onClick={handleWhatsAppClick}
      />
    </WhatsAppButtonWrapper>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <ScrollToTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollToTop>

      <WhatsAppButton />
    </div>
  );
};

export default App;
