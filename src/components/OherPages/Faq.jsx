import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Pagetitle from "../../global/Pagetitle";
import { useTheme } from "@emotion/react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Faq() {
  const faqs = [
    {
      panel: "panel1",
      question: "What services does Editsh Technologies offer?",
      answer: (
        <>
          Editsh provides a range of services, including Website Development,
          Mobile Application Development, UX/UI Design, Digital Marketing, and
          Content Creation.
        </>
      ),
    },
    {
      panel: "panel2",
      question: "What industries does Editsh cater to?",
      answer: (
        <>
          We serve clients across various industries in service and retail
          sectors, including healthcare, e-commerce, finance, education, and
          more.
        </>
      ),
    },
    {
      panel: "panel3",
      question: "What technologies do you use for app development?",
      answer: (
        <>
          We use a variety of technologies, including Flutter, Java, Kotlin,
          Swift, and JavaScript, to develop customized mobile applications for
          iOS and Android.
        </>
      ),
    },
    {
      panel: "panel4",
      question: "How can I get started with Editsh services?",
      answer: (
        <>
          You can contact us through our website or by reaching out to our team
          via email or phone. We'll be happy to discuss your project and provide
          a tailored solution.
        </>
      ),
    },
    {
      panel: "panel5",
      question: "Can you help improve our online presence?",
      answer: (
        <>
          Yes, Editsh specializes in digital marketing services, such as SEO,
          PPC, Social Media Marketing, and Email Marketing, to enhance your
          online presence and engagement.
        </>
      ),
    },
  ];

  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Pagetitle
        title={`FAQ`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Box
        sx={{
          py: 4,
          backgroundColor: theme.palette.black,
        }}
      >
        <Container sx={{ py: 4 }}>
          <Grid container row spacing={3}>
            <Grid item xs={3} md={12} lg={6} xl={6}>
              <img
                src="https://i.postimg.cc/qRN4dptw/Faq.jpg"
                alt="faq"
                data-aos-duration="2000"
                data-aos="fade-right"
              />
            </Grid>
            <Grid
              item
              xs={3}
              md={12}
              lg={6}
              xl={6}
              data-aos-duration="2000"
              data-aos="fade-left"
            >
              <Box sx={{ width: "100%" }}>
                {faqs.map((faq) => (
                  <Accordion
                    key={faq.panel}
                    expanded={expanded === faq.panel}
                    onChange={handleChange(faq.panel)}
                    sx={{
                      p: 2,
                      mb: 4,
                      boxShadow: 1,
                      borderTop:
                        expanded === faq.panel
                          ? `6px solid ${theme.palette.secondary.main}`
                          : "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          sx={{ color: theme.palette.secondary.main }}
                        />
                      }
                      aria-controls={`${faq.panel}-content`}
                      id={`${faq.panel}-header`}
                    >
                      <Typography component="div" variant="body1">
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          width: { sm: "100%", md: "100%" },
                          fontSize: "14px",
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
