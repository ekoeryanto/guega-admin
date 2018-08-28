import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const styles = theme => ({
    section: {
        marginTop: theme.spacing.unit * 3
    }
});

const SecondPage = ({ classes }) => (
    <Layout>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2.</p>
        <p>
            This page has been styled using global CSS. This approach could be
            used to style simple HTML markup, e.g. Markdown generated markup.
            Here's an example:
        </p>

        <h2>Richard Hamming on Luck</h2>
        <div>
            <p>
                From Richard Hamming’s classic and must-read talk, “
                <a href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
                    You and Your Research
                </a>
                ”.
            </p>
            <blockquote>
                <p>
                    There is indeed an element of luck, and no, there isn’t. The
                    prepared mind sooner or later finds something important and
                    does it. So yes, it is luck.{' '}
                    <em>
                        The particular thing you do is luck, but that you do
                        something is not.
                    </em>
                </p>
            </blockquote>
        </div>
        <p>Posted April 09, 2011</p>

        <section className={classes.section}>
            <Link to="/">Go back to the homepage</Link>
        </section>
    </Layout>
);

export default withStyles(styles)(SecondPage);
