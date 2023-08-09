import Header from "../Header/Header";
import Footer from "../HomeBook/HomeFooter";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
	
		display: "flex",
		flexDirection: "column",
		

		
	},

	privacy: {
		
		color: "black",
		textAlign: "center",
		fontWeight: "bolder",
		width: "100%",
		height: "5rem",
		marginTop: theme.spacing(11),
		
	},

	typo: {

		[theme.breakpoints.between('xs','sm' )]: {
			
			fontSize: "1.5rem"
		  }
		
	},

	welcome: {
		marginLeft: theme.spacing(10),
		marginRight: theme.spacing(10),
		[theme.breakpoints.between('xs','sm' )]: {
			margin: theme.spacing(2)

		  }
	},
}));

const Privacy = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div>
				<Header />
			</div>
			<Box
				
				color="black"
				mt={8}
				height={100}
				width="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Typography variant="h4" align="center">
					Privacy Policy
				</Typography>
			</Box>
			<div className={classes.welcome}>
				
				<div>
					<Typography>
						It is LMTS's policy to respect your privacy
						regarding any information we may collect while operating
						our website. This Privacy Policy applies to
						https://lmts.ng (hereinafter, "us", "we", or
						"https://lmts.ng"). We respect your privacy and
						are committed to protecting personally identifiable
						information you may provide us through the Website. We
						have adopted this privacy policy ("Privacy Policy") to
						explain what information may be collected on our
						Website, how we use this information, and under what
						circumstances we may disclose the information to third
						parties. This Privacy Policy applies only to information
						we collect through the Website and does not apply to our
						collection of information from other sources. This
						Privacy Policy, together with the Terms and conditions
						posted on our Website, set forth the general rules and
						policies governing your use of our Website. Depending on
						your activities when visiting our Website, you may be
						required to agree to additional terms and conditions.
					</Typography>
				</div>
				<div>
					<Typography variant="h4" align="center" color="black" className={classes.typo}>
						Website Visitor
					</Typography>

					<Typography>
						Like most website operators, LMTS Group collects
						non-personally-identifying information of the sort that
						web browsers and servers typically make available, such
						as the browser type, language preference, referring
						site, and the date and time of each visitor request.
						LMTS Group's purpose in collecting non-personally
						identifying information is to better understand how
						LMTS Group's visitors use its website. From time to
						time, LMTS Group may release non-personally-identifying
						information in the aggregate, e.g., by publishing a
						report on trends in the usage of its website. LMTS Group only
						discloses logged in user and commenter IP addresses
						under the same circumstances that it uses and discloses
						personally-identifying information as described below.
					</Typography>
				</div>
				<div>
					
					<Typography>
						Certain visitors to LMTS Group's websites choose to
						interact with LMTS Group in ways that require Peace
						Group to gather personally-identifying information. The
						amount and type of information that Peace Group gathers
						depends on the nature of the interaction. 
					</Typography>
				</div>
				<div>
					
					<Typography>
						The security of your Personal Information is important
						to us, but remember that no method of transmission over
						the Internet, or method of electronic storage is 100%
						secure. While we strive to use commercially acceptable
						means to protect your Personal Information, we cannot
						guarantee its absolute security.
					</Typography>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Privacy;
