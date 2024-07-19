const productSelect = document.querySelector("#product");

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function createProductList() {
    products.forEach(p => {
        optElement = document.createElement("option");
        optElement.setAttribute("value", p.id);
        optElement.innerText = p.name

        productSelect?.appendChild(optElement);
    });
  }

  createProductList();
  
    products.forEach(product => {
        const newOption = document.createElement("option");
        newOption.value = product.id;
        newOption.textContent = product.name;
      
        selectOptions.appendChild(newOption);
    });
  
    const form = document.getElementById("reviewForm");
    form.addEventListener('submit', function (event) {
        let reviewCount = parseInt(localStorage.getItem("reviewCounter")) || 0;
        console.log("Current review count:", reviewCount);
        localStorage.setItem("reviewCounter", ++reviewCount);
        console.log("Updated review count:", reviewCount);
    });