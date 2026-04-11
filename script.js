let puri = document.getElementsByTagName("p");
const vector = ["It was established in 1911 and is housed in a historic building that was once the residence of the city's bishop."
, "The museum's collection includes a wide range of artworks, including paintings, sculptures, and decorative arts, with a focus on Romanian art from the 19th and 20th centuries."
, "The museum also hosts temporary exhibitions and cultural events throughout the year, making it a vibrant cultural hub in Baia Mare."
]
for (let i = 0; i < puri.length; i++) {
    puri[i].innerHTML = "🟠";
    puri[i].addEventListener("click", () => {
        if(puri[i].innerHTML == "🟠")
        puri[i].innerHTML = vector[i];
        else puri[i].innerHTML = "🟠";
    })
}