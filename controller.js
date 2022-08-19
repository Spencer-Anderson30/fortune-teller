module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}

module.exports = {

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A lifetime of happiness lies ahead of you.", "Believe it can be done.", "Don't just spend time. invest it.", "The night life is for you."]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    } 
}

module.exports = {

    getFortune: (req, res) => {
        const qoutes = ["Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi", "Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill", "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs" ]

        let randomIndex = Math.floor(Math.random() * qoutes.length)
        let randomQuote = qoutes[randomIndex]

        res.status(200).send(randomQuote)
    } 
}

module.exports = {

    getFortune: (req, res) => {
        const qoutes = ["You have to really beileve you can do anything you set your mind to" ]

        let randomIndex = Math.floor(Math.random() * inspiration.length)
        let randomInspiration = inspiration[randomIndex]

        res.status(200).send(randomInspiration)
    } 
}
