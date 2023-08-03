import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../HomeBook/HomeFooter";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		backgroundColor: "lavender",
		flexDirection: "column",
	},
	terms: {
		backgroundColor: "darkgray",
		color: "white",
		fontWeight: "bolder",
		[theme.breakpoints.between('xs','sm' )]: {
			fontSize: "1rem"
		  }
	},

	typoTerms: {
		[theme.breakpoints.between('xs','sm' )]: {
			fontSize: "1.5rem",
			fontWeight: "bold"
		  }
	},
	welcome: {
		marginRight: theme.spacing(15),
		marginLeft: theme.spacing(15),
		wordSpacing: "5px",

		[theme.breakpoints.between('xs','sm' )]: {
			marginLeft: theme.spacing(1),
			marginRight: theme.spacing(1)
			
		  }
	},
}));

const Terms = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<Box
				bgcolor="gray"
				color="white"
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
					<Typography variant="h3" color="black" align="center" className={classes.typoTerms}>
						Welcome to Lautech Management Transport Service
					</Typography>
					<Typography>
						These terms and conditions outline the rules and
						regulations for the use of Peace Group's Website. Peace
						Group is located at: Peace Factory Enugu - Enugu State ,
						Nigeria By accessing this website we assume you accept
						these terms and conditions in full. Do not continue to
						use Peace Group's website if you do not accept all of
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
					<Typography variant="h3" align="center" color="black">
						Cookies
					</Typography>
					<Typography>
						{" "}
						We employ the use of cookies. By using Peace Group's
						website you consent to the use of cookies in accordance
						with Peace Group's privacy policy.Most of the modern day
						interactive web sites use cookies to enable us to
						retrieve user details for each visit. Cookies are used
						in some areas of our site to enable the functionality of
						this area and ease of use for those people visiting.
						Some of our affiliate / advertising partners may also
						use cookies.
					</Typography>
				</div>
				<div>
					<Typography variant="h3" align="center" color="black">
						License
					</Typography>
					<Typography>
						Unless otherwise stated, Peace Group and/or it's
						licensors own the intellectual property rights for all
						material on Peace Group. All intellectual property
						rights are reserved. You may view and/or print pages
						from https://peacegroup.ng for your own personal use
						subject to restrictions set in these terms and
						conditions. You must not: Republish material from
						https://peacegroup.ng Sell, rent or sub-license material
						from https://peacegroup.ng Reproduce, duplicate or copy
						material from https://peacegroup.ng Redistribute content
						from Peace Group (unless content is specifically made
						for redistribution).
					</Typography>
				</div>
				<div>
					<Typography variant="h3" color="black" align="center">
						User's Comment{" "}
					</Typography>
					<Typography>
						{" "}
						This Agreement shall begin on the date hereof. Certain
						parts of this website offer the opportunity for users to
						post and exchange opinions, information, material and
						data ('Comments') in areas of the website. Peace Group
						does not screen, edit, publish or review Comments prior
						to their appearance on the website and Comments do not
						reflect the views or opinions ofPeace Group, its agents
						or affiliates. Comments reflect the view and opinion of
						the person who posts such view or opinion. To the extent
						permitted by applicable laws Peace Groupshall not be
						responsible or liable for the Comments or for any loss
						cost, liability, damages or expenses caused and or
						suffered as a result of any use of and/or posting of
						and/or appearance of the Comments on this website. Peace
						Groupreserves the right to monitor all Comments and to
						remove any Comments which it considers in its absolute
						discretion to be inappropriate, offensive or otherwise
						in breach of these Terms and Conditions. You warrant and
						represent that: You are entitled to post the Comments on
						our website and have all necessary licenses and consents
						to do so; The Comments do not infringe any intellectual
						property right, including without limitation copyright,
						patent or trademark, or other proprietary right of any
						third party; The Comments do not contain any defamatory,
						libelous, offensive, indecent or otherwise unlawful
						material or material which is an invasion of privacy The
						Comments will not be used to solicit or promote business
						or custom or present commercial activities or unlawful
						activity. You hereby grant to Peace Group a
						non-exclusive royalty-free license to use, reproduce,
						edit and authorize others to use, reproduce and edit any
						of your Comments in any and all forms, formats or media.
					</Typography>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Terms;
