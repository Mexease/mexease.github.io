$(document).ready(function () {
    // Auto-play the carousel
    $('#carouselExampleIndicators').carousel({
        interval: 3000, // Slide every 3 seconds
        pause: 'hover'
    });

    // Quotes array for Slide 1
    const quotes = [
        "<strong>9-5 doesn't work for winners</strong>",
        "<strong>“The artist must love to be miserable because this is war and war is hell” - Steven Pressfield</strong>",
        "<strong>“In mathematics the art of asking questions is more valuable than solving problems.” – Georg Cantor</strong>",
        "<strong>“You cannot force ideas. Successful ideas are the result of slow growth.” – Alexander Graham Bell</strong>",
        "<strong>“Nothing is more dangerous than an idea, when it's the only one we have.” – Émile Chartier</strong>",
        "<strong>“The most dangerous phrase in the language is, 'We've always done it this way.'” – Grace Hopper</strong>",
        "<strong>“Creativity — like human life itself — begins in darkness...” – Julia Cameron</strong>",
        "<strong>“All progress depends on unreasonable people.” – George Bernard Shaw</strong>",
        "<strong>“Somewhere, something incredible is waiting to be known.” – Carl Sagan</strong>",
        "<strong>“Everything means something.” - Jim Friedman</strong>"
    ];

    // Statements array for Slide 2 and 3
    const statements = [
        "<strong>Start before you feel ready.</strong>",
        "<strong>The only way to begin is to begin.</strong>",
        "<strong>Big change starts with small experiments.</strong>",
        "<strong>Thinking deeply is a creative act.</strong>",
        "<strong>When in doubt, ask a better question.</strong>",
        "<strong>True insight often starts as uncertainty.</strong>",
        "<strong>Ideas grow by being tested.</strong>",
        "<strong>Creative work is problem solving in disguise.</strong>",
        "<strong>Make the abstract real—write it down.</strong>",
        "<strong>Don’t just absorb ideas—challenge them.</strong>"
    ];

    // Function to get unique random statements for Slide 2 and Slide 3
    function getUniqueStatements() {
        const shuffledStatements = [...statements];
        shuffledStatements.sort(() => Math.random() - 0.5);
        return shuffledStatements.slice(0, 2); // Get 2 unique statements for slides 2 and 3
    }

    // Get one random quote for Slide 1
    const quoteSlide1 = quotes[Math.floor(Math.random() * quotes.length)];

    // Get two unique random statements for Slide 2 and Slide 3
    const [statementSlide2, statementSlide3] = getUniqueStatements();

    // Assign the quote to Slide 1
    $('#quote-of-the-day-slide1').html(quoteSlide1);

    // Assign the statements to Slide 2 and Slide 3
    $('#quote-of-the-day-slide2').html(statementSlide2);
    $('#quote-of-the-day-slide3').html(statementSlide3);

    // Statement of the Day logic (randomly select a statement)
    const randomStatementIndex = Math.floor(Math.random() * statements.length);
    const randomStatement = statements[randomStatementIndex];

    // Render the random statement for the day
    $('#statement-of-the-day').html(randomStatement);

    // Smooth scrolling for navigation links
    $(".navbar-nav a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            const hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });
});


