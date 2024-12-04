import { Container, Box, Typography } from "@mui/material";
import Pagetitle from "../../global/Pagetitle";
import { Link } from "react-router-dom";

function Term() {
  return (
    <>
      <Pagetitle
        title={`Terms & Conditions`}
        description={`
          We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Container maxWidth="md" style={{ padding: "2rem" }}>
        <Box elevation={3} style={{ padding: "2rem" }}>
          <Typography variant="h4" gutterBottom>
            Terms and Conditions
          </Typography>
          <Typography paragraph>
            These terms and conditions govern your access to and use of the
            Editsh website. By accessing or using the Site, you agree to be
            bound by these Terms. If you do not agree to these terms, you may
            not use the Site.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Intellectual Property
          </Typography>
          <Typography paragraph>
            All content on the Website, including text, images, videos, and
            software, is protected by copyright and other intellectual property
            laws. You may not copy, distribute, or modify any of the Website's
            content without the express written permission of Website Owner.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Acceptable Use
          </Typography>
          <Typography paragraph>
            You agree to use the Website only for lawful purposes and in
            accordance with these Terms. You agree not to use the Website to:
          </Typography>
          <Typography paragraph>
            <ul >
              <li style={{ listStyle: "circle!important", marginLeft: "1.5rem",marginBottom:'14px' }}>
                - Engage in any conduct that is harmful, threatening, abusive,
                harassing, defamatory, obscene, vulgar, or racially, ethnically,
                or otherwise objectionable.
              </li>
              <li style={{ listStyle: "circle!important", marginLeft: "1.5rem",marginBottom:'14px' }}>
                - Transmit or distribute any viruses or other harmful computer
                code.
              </li>
              <li style={{ listStyle: "circle!important", marginLeft: "1.5rem",marginBottom:'14px' }}>
               - Interfere with the operation of the Website or the networks or
                servers used to operate it.
              </li >
              <li style={{ listStyle: "disc!important", marginLeft: "1.5rem",marginBottom:'14px' }}>Violate any applicable laws or regulations.</li>
            </ul>
          </Typography>

          <Typography variant="h6" gutterBottom>
            User Contributions
          </Typography>
          <Typography paragraph>
            You may be able to submit content to the Website, such as comments,
            reviews, and photos. You retain all ownership rights in your User
            Contributions, but you grant Website Owner a non-exclusive,
            royalty-free license to use, reproduce, modify, distribute, and
            display your User Contributions in connection with the Website. You
            are solely responsible for the content of your User Contributions,
            and you agree that you will not submit any User Contributions that
            are unlawful, harmful, threatening, abusive, harassing, defamatory,
            obscene, vulgar, or racially, ethnically, or otherwise
            objectionable.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Third-Party Content
          </Typography>
          <Typography paragraph>
            The Website may contain links to third-party websites and services.
            Website Owner is not responsible for the content of any third-party
            websites or services, and does not endorse any products or services
            advertised on third-party websites or services.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Disclaimer of Warranties
          </Typography>
          <Typography paragraph>
            The website is provided on an 'as is' and 'as available' basis.
            website owner makes no warranties, express or implied, about the
            operation of the website or the content contained therein. [website
            owner] expressly disclaims all warranties of merchant ability,
            fitness for a particular purpose, and non-infringement.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Limitation of Liability
          </Typography>
          <Typography paragraph>
            To the fullest extent permitted by law, website owner excludes all
            liability for any direct, indirect, incidental, special,
            consequential, or punitive damages arising out of or in connection
            with your access or use of the website, even if website owner has
            been advised of the possibility of such damages.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Governing Law
          </Typography>
          <Typography paragraph>
            These Terms will be governed by and construed in accordance with the
            laws of the State, without regard to its conflict of law provisions.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Dispute Resolution
          </Typography>
          <Typography paragraph>
            Any disputes arising out of or in connection with these Terms will
            be resolved by binding arbitration in accordance with the rules of
            the American Arbitration Association. The arbitration will be held
            in [City, State], and the arbitrator's decision will be final and
            binding.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Indemnification
          </Typography>
          <Typography paragraph>
            Any disputes arising out of or in connection with these Terms will
            be resolved by binding arbitration in accordance with the rules of
            the American Arbitration Association. The arbitration will be held
            in [City, State], and the arbitrator's decision will be final and
            binding.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography paragraph>
            If you have any questions about these Terms, please contact us at{" "}
            <Link to="mailto:editshtech01@gmail.com">editshtech01@gmail.com</Link>
            .
          </Typography>

          <Typography variant="h6" gutterBottom>
            Changes to These Terms
          </Typography>
          <Typography paragraph>
            Website Owner may change these Terms at any time by posting a new
            version on the Website. Your continued use of the Website after any
            changes to these Terms will constitute your acceptance of the new
            Terms.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Severability
          </Typography>
          <Typography paragraph>
            If any provision of these Terms is found to be invalid or
            unenforceable, then that provision will be severed from these Terms
            and the remaining provisions will remain in full force and effect.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Entire Agreement
          </Typography>
          <Typography paragraph>
            These Terms constitute the entire agreement between you and [Website
            Owner] with respect to your access to and use of the Website.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default Term;
