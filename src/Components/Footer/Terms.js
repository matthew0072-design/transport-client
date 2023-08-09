import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../HomeBook/HomeFooter";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		
	},
	terms: {
		
		color: "black",
		fontWeight: "bolder",
		[theme.breakpoints.between('xs','sm' )]: {
			fontSize: "1rem"
		  }
	},

	typoTerms: {
		[theme.breakpoints.between('xs','sm' )]: {
			fontSize: "1.5rem",
			fontWeight: "bold",
			
			
		  }
	},
	welcome: {
		marginRight: theme.spacing(15),
		marginLeft: theme.spacing(15),
		wordSpacing: "5px",
		height: 500,
		[theme.breakpoints.between('xs','sm' )]: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1),
			marginBottom: "2rem",
			height: "auto",
		  }
	},
}));

const Terms = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Box
				bgcolor="white"
				color="black"
				mt={9}
				height={100}
				
				width="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Typography variant="h3" align="center" className={classes.typoTerms}>
					Terms & Conditions
				</Typography>
			</Box>
			<div className={classes.welcome}>
				<div>
					
					<Typography>
						These terms and conditions outline the rules and
						regulations for the use of LMTS  Website. Do not continue to
						use LMTS website if you do not accept all of
						the terms and conditions stated on this page. The
						following terminology applies to these Terms and
						Conditions, Privacy Statement and Disclaimer Notice and
						any or all Agreements: "Client", "You" and "Your" refers
						to you, the person accessing this website and accepting
						the Company's terms and conditions. "The Company",
						"Ourselves", "We", "Our" and "Us", refers to our
						Company. "Party", "Parties", or "Us", refers to both the
						Client and ourselves, or either the Client or ourselves.
						All terms refer to the offer, acceptance and
						consideration of payment necessary to undertake the
						process of our assistance to the Client in the most
						appropriate manner, whether by formal meetings of a
						fixed duration, or any other means, for the express
						purpose of meeting the Client's needs in respect of
						provision of the Company's stated services/products, in
						accordance with and subject to, prevailing law of
						Nigeria. Any use of the above terminology or other words
						in the singular, plural, capitalisation and/or he/she or
						they, are taken as interchangeable and therefore as
						referring to same.
					</Typography>
				</div>

				<div>
					
					<Typography>
						{" "}
						We employ the use of cookies. By using LMTS
						website you consent to the use of cookies in accordance
						with LMTS privacy policy.Most of the modern day
						interactive web sites use cookies to enable us to
						retrieve user details for each visit. Cookies are used
						in some areas of our site to enable the functionality of
						this area and ease of use for those people visiting.
						Some of our affiliate / advertising partners may also
						use cookies.
					</Typography>
				</div>
				
				
			</div>
			<Footer />
		</div>
	);
};

export default Terms;
