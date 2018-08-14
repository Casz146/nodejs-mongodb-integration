var characterCards = [{name: "Rhodry Maelwaedd", 
                        description: "Rhodry is a key character in the Deverry storyline. He is a highborn noble, but through fate has become a Silverdagger.", 
                        image: "img/Characters/rhodry_maelwaed.png"},
                    {name: "Gilyan",
                    description: "Gilyan is a strong sorceress who is closely tied to Rhodry in many ways.",
                    image: "img/Characters/gilyan.jpg",
                    },
                    {name: "Nevyn",
                    description: "One of the most powerful sorcerers that has ever existed. Also called the 'Master of the Ether'.",
                    image: "img/Characters/nevyn.jpg",
                    },
                    {name: "Otho",
                    description: "A very old dwarven blacksmith, one of the only craftmen who can make the alloy for the silver daggers the Silver Daggers use.",
                    image: "img/Characters/otho.jpg",
                    },
                    {name: "Evandar",
                    description: "Evandar is spiritual being that plays a major role in the books, he is neither dead nor alive and is thought to be a soul that failed to be part of the cycle of life and death. As such, he possesses great command over Dweomer.",
                    image: "img/Characters/evandar.jpg",
                    },
                    {name: "Dallandra",
                    description: "An elven woman who decided to live with Evandar in his land on another plane. There she learns much abuot Dweomer and the strange beings that inhabit the land, both of Evandar's people and his brother's.",
                    image: "img/Characters/dallandra.jpg",
                    },
                    {name: "Salamander",
                    description: "Salamander is the half-brother of Rhodry, he started his Dweomer studies but is not as concerned with them as Gilyan would like. However, he is very intelligent and helps a great deal of people throughout the story. He is generally cheerful and very wordy.",
                    image: "img/Characters/salamander.jpg",
                    },
                    {name: "Maryn",
                    description: "The one true king, the books tell the story of how he ended unrest in the kingdom and became the one true king of Deverry. His charisma is infused with Dweomer and has been taught from a very young age by Nevyn, teaching him how to run a kingdom.",
                    image: "img/Characters/maryn.jpg",
                    },
                ];

class character {
    constructor(name,description,image) {
        this.name = name
        this.description = description
        this.image = image
        characterCards.push(this)
    }
};

function refreshcards() {
    characterCards.forEach(element => {
        var imgdiv = '<img class="card-img-top" src="' + element.image + '" alt="Card image cap">'
        var namediv = '<h5 class="card-title">' + element.name + '</h5>'
        var desdiv = '<p class="card-text">' + element.description + '</p>'
        $('.card-columns').append('<div class="card">' + imgdiv + '<div class="card-body"> ' + namediv + desdiv + '</div>' + '</div>')
    });
}

refreshcards();