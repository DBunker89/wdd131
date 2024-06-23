const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// get current year
document.getElementById("currentyear").innerText = new Date().getFullYear();

const temples = [
	{
	  templeName: "Las Vegas",
	  location: "Las Vegas, NV, United States",
	  dedicated: "December 16, 1989",
	  imageUrl: "https://churchofjesuschrist.org/imgs/34bee57930584d7ae483aa077cbd78e9050330ba/full/320%2C/0/default"
    },
    {
	  templeName: "Belem",
	  location: "Belem, Brazil",
	  dedicated: "November 20, 2022",
	  imageUrl:
	  "https://churchofjesuschrist.org/imgs/588d3a27e2b911ec94adeeeeac1e0a0694f432a0/full/320%2C/0/default"
	},
	{
	  templeName: "Kona",
	  location: "Kona, HI, United States",
	  dedicated: "January 23, 2000",
	  imageUrl:
	  "https://www.churchofjesuschrist.org/imgs/1dce0cee04a14b2ee221b5380355bb9fe8110a0c/full/320%2C/0/default"
	},
	{
	  templeName: "Lisbon",
	  location: "Lisbon, Porugal",
	  dedicated: "September 15, 2019",
	  imageUrl:
	  "https://churchofjesuschrist.org/imgs/6d84eb0301da0baca818212965160d2db12879c1/full/250%2C/0/default"
	},
	{
	  templeName: "London",
	  location: "London, England",
	  dedicated: "September 7, 1958",
	  imageUrl:
	  "https://churchofjesuschrist.org/imgs/914ec5701c2435b4cfa50668de85df2aebf68f26/full/320%2C/0/default"
	},
	{
	  templeName: "Los Angeles",
	  location: "Los Angeles, CA, United States",
	  dedicated: "March 11, 1956",
	  imageUrl:
	  "https://churchofjesuschrist.org/imgs/f776300d2f59a0d25045f45d961c326a7ae080d8/full/320%2C/0/default"
	},
	{
	  templeName: "Madrid",
	  location: "Madrid, Spain",
	  dedicated: "March 19, 1999",
	  imageUrl:
	  "https://churchofjesuschrist.org/imgs/93fe327ea5a8f82b20a48e283e51dc32f57ba148/full/320%2C/0/default"
	},
	{
		templeName: "Okinawa",
		location: "Okinawa, Japan",
		dedicated: "November 12, 2023",
		imageUrl:
		"https://churchofjesuschrist.org/imgs/99f1e63f202511eeb116eeeeac1ef1e8603f51a8/full/320%2C/0/default"
	},
	{
		templeName: "Salt Lake City",
		location: "Salt Lake City, UT, United States",
		dedicated: "April 6, 1893",
		imageUrl:
		"https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/320%2C/0/default"
	},
	// Add more temple objects here...
];


function DisplayTemples(temples) {
	gallery.innerHTML = ""
	temples.forEach(t => {
		const gallery = document.querySelector("#gallery");
		const card = document.createElement("div");
		const templeHTML = `
		<h3>${t.templeName}</h3>
		<p><strong>Location: </strong>${t.location}</p>
		<p><strong>Dedicated: </strong>${t.dedicated}</p>
		<p><strong>Size: </strong>${t.area}</p>
		<img src="${t.imageUrl}" alt="A picture of ${t.templeName} Temple" loading="lazy">
		`;

	card.innerHTML = templeHTML;
	gallery.appendChild(card);
	});
}


const allTemplesLink = document.querySelector("#all-temples");
const oldTemplesLink = document.querySelector("#old-temples");
const newTemplesLink = document.querySelector("#new-temples");
const largeTemplesLink = document.querySelector("#large-temples");
const smallTemplesLink = document.querySelector("#small-temples");
const selection = document.querySelector("#selection")


allTemplesLink.addEventListener("click", () => {
	DisplayTemples(temples);
	selection.innerText = "Home";
});
oldTemplesLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)
	DisplayTemples(filteredTemples);
	selection.innerText = "Old";
});
newTemplesLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)
	DisplayTemples(filteredTemples);
	selection.innerText = "New";
});
largeTemplesLink.addEventListener("click", () => {
const filteredTemples = temples.filter(temple => temple.area > 90000)
DisplayTemples(filteredTemples);
selection.innerText = "Large";
});
smallTemplesLink.addEventListener("click", () => {
	const filteredTemples = temples.filter(temple => temple.area < 10000)
	DisplayTemples(filteredTemples);
	selection.innerText = "Small";
});


DisplayTemples(temples);