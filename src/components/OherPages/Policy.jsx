import { Box, Container, Divider, Typography } from "@mui/material";
import PageTitle from "../../global/PageTitle";

function Policy() {
  return (
    <>
      <PageTitle
        title={`Policy`}
        description={`
          We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Container maxWidth="md" style={{ padding: "2rem" }}>
        <Typography variant="h4" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            py: 3,
          }}
        >
          Editsh respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, and share your personal information when you visit our website or
          use our software.
        </Typography>
        <Box
          sx={{
            my: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            What personal information do we collect?
          </Typography>
          <Typography variant="body1" paragraph>
            We collect the following types of personal information from you:
            <ul>
              <li>
                <strong>Contact information:</strong> This includes your name,
                email address, phone number, and mailing address.
              </li>
              <li>
                <strong>Account information:</strong> This includes your
                username, password, and any other information you provide to
                create or manage your account.
              </li>
              <li>
                <strong>Usage information:</strong> This includes information
                about how you use our website and software, such as the pages
                you visit, the features you use, and the time and date of your
                visits.
              </li>
              <li>
                <strong>Technical information:</strong> This includes
                information about your computer or device, such as your IP
                address, browser type, and operating system.
              </li>
            </ul>
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            my: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            How do we use your personal information?
          </Typography>
          <Typography variant="body1" paragraph>
            We use your personal information for the following purposes:
            <ul>
              <li>
                <strong>To provide you with the services you request:</strong>{" "}
                We use your contact information to send you information about
                our services, to respond to your requests, and to provide you
                with technical support.
              </li>
              <li>
                <strong>To communicate with you:</strong> We use your contact
                information to send you marketing communications about our
                products and services, and to notify you about changes to our
                policies.
              </li>
              <li>
                <strong>To protect our rights:</strong> We use your personal
                information to protect our rights and property, to enforce our
                terms of service, and to investigate and prevent fraud.
              </li>
            </ul>
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            my: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            Who do we share your personal information with?
          </Typography>
          <Typography variant="body1" paragraph>
            We may share your personal information with the following third
            parties:
            <ul>
              <li>
                <strong>Our service providers:</strong> We may share your
                personal information with our service providers who help us
                operate our website and software, such as hosting providers,
                email providers, and payment processors.
              </li>
              <li>
                <strong>Other companies:</strong> We may share your personal
                information with other companies for marketing purposes, but
                only if you have opted in to receive these communications.
              </li>
              <li>
                <strong>Legal authorities:</strong> We may share your personal
                information with legal authorities if we are required to do so
                by law or if we believe that sharing is necessary to protect our
                rights or property, to enforce our terms of service, or to
                investigate and prevent fraud.
              </li>
            </ul>
          </Typography>
        </Box>
        <Divider />

        <Box
          sx={{
            my: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            How do we protect your personal information?
          </Typography>
          <Typography variant="body1" paragraph>
            We take steps to protect your personal information from unauthorized
            access, use, disclosure, alteration, or destruction. These steps
            include:
            <ul>
              <li>
                <strong>Physical security measures:</strong> We store your
                personal information on secure servers that are protected by
                firewalls and other security measures.
              </li>
              <li>
                <strong>Technical security measures:</strong> We use encryption
                and other security measures to protect your personal information
                when it is transmitted over the internet.
              </li>
              <li>
                <strong>Access controls:</strong> We limit access to your
                personal information to authorized employees and contractors who
                need to access it in order to perform their jobs.
              </li>
            </ul>
          </Typography>
        </Box>

        <Divider />
        <Box
          sx={{
            my: 3,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            Your rights
          </Typography>
          <Typography variant="body1" paragraph>
            You have the following rights with respect to your personal
            information:
            <ul>
              <li>
                <strong>The right to access:</strong> You have the right to
                access your personal information that we collect.
              </li>
              <li>
                <strong>The right to correct:</strong> You have the right to
                correct any inaccuracies in your personal information.
              </li>
              <li>
                <strong>The right to delete:</strong> You have the right to
                request that we delete your personal information.
              </li>
              <li>
                <strong>The right to object:</strong> You have the right to
                object to the processing of your personal information.
              </li>
              <li>
                <strong>The right to portability:</strong> You have the right to
                request that we transfer your personal information to another
                organization.
              </li>
            </ul>
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            How to exercise your rights
          </Typography>
          <Typography variant="body1" paragraph>
            You can exercise your rights by contacting us at{" "}
            <a href="mailto:editshtech01@gmail.com">editshtech01@gmail.com</a>
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "600",
            }}
          >
            Changes to this Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph>
            We may update this Privacy Policy from time to time. If we make any
            material changes to this Privacy Policy, we will notify you by email
            or through a notice on our website.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Contact us
          </Typography>
        </Box>

        <Typography variant="body1" paragraph>
          If you have any questions about this Privacy Policy, please contact us
          at <a href="mailto:editshtech01@gmail.com">editshtech01@gmail.com</a>
        </Typography>
      </Container>
    </>
  );
}

export default Policy;
