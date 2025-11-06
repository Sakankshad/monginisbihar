    // Get the dropdown elements
    var firstDropdown = document.getElementById("first-dropdown");
    var secondDropdown = document.getElementById("second-dropdown");

    // Populate the second dropdown based on the selection in the first dropdown
    firstDropdown.addEventListener("change", function() {
      var selectedCategory = firstDropdown.value;
      populateSecondDropdown(selectedCategory);
      filterItems();
    });

    // Filter the items based on the selection in the second dropdown
    secondDropdown.addEventListener("change", function() {
      filterItems();
    });

    // Function to populate the second dropdown based on the selected category
    function populateSecondDropdown(category) {
      secondDropdown.innerHTML = "";

      if (category === "all") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

      } else if (category === "Patna") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Patna";
        option1.value = "Patna1";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Danapur";
        option2.value = "Danapur";
        secondDropdown.add(option2);

        var option3 = document.createElement("option");
        option3.text = "Bihta";
        option3.value = "Bihta";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Patna City";
        option4.value = "Patna-City";
        secondDropdown.add(option4);

        var option5 = document.createElement("option");
        option5.text = "Masaurhi";
        option5.value = "Masaurhi";
        secondDropdown.add(option5);

        var option6 = document.createElement("option");
        option6.text = "Fatuha";
        option6.value = "Fatuha";
        secondDropdown.add(option6);

        var option7 = document.createElement("option");
        option7.text = "Daniawan";
        option7.value = "Daniawan";
        secondDropdown.add(option7);

        var option8 = document.createElement("option");
        option8.text = "Sampatchak";
        option8.value = "Sampatchak";
        secondDropdown.add(option8);

        var option9 = document.createElement("option");
        option9.text = "Baktiyarpur";
        option9.value = "Baktiyarpur";
        secondDropdown.add(option9);

        var option10 = document.createElement("option");
        option10.text = "Barh";
        option10.value = "Barh";
        secondDropdown.add(option10);

        var option11 = document.createElement("option");
        option11.text = "Punpun";
        option11.value = "Punpun";
        secondDropdown.add(option11);

      } else if (category === "Muzaffarpur") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Muzaffarpur";
        option1.value = "Muzaffarpur1";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Motipur";
        option2.value = "Motipur";
        secondDropdown.add(option2);

      } else if (category === "Vaishali") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Hajipur";
        option1.value = "Hajipur";
        secondDropdown.add(option1);

        var option3 = document.createElement("option");
        option3.text = "Lalganj";
        option3.value = "Lalganj";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Sarai";
        option4.value = "Sarai";
        secondDropdown.add(option4);

        var option5 = document.createElement("option");
        option5.text = "Mahua";
        option5.value = "Mahua";
        secondDropdown.add(option5);

      } else if (category === "Saran") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Sonepur";
        option1.value = "Sonepur";
        secondDropdown.add(option1);

        var option3 = document.createElement("option");
        option3.text = "Chhapra";
        option3.value = "Chhapra";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Parsa";
        option4.value = "Parsa";
        secondDropdown.add(option4);

        var option5 = document.createElement("option");
        option5.text = "Mashrakh";
        option5.value = "Mashrakh";
        secondDropdown.add(option5);

        var option6 = document.createElement("option");
        option6.text = "Garkha";
        option6.value = "Garkha";
        secondDropdown.add(option6);

        var option7 = document.createElement("option");
        option7.text = "Nagra";
        option7.value = "Nagra";
        secondDropdown.add(option7);

        var option8 = document.createElement("option");
        option8.text = "Marhowrah";
        option8.value = "Marhowrah";
        secondDropdown.add(option8);

      } else if (category === "Siwan") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Siwan";
        option1.value = "Siwan1";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Maharajganj";
        option2.value = "Maharajganj";
        secondDropdown.add(option2);

        var option3 = document.createElement("option");
        option3.text = "Andar";
        option3.value = "Andar";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Mairwa";
        option4.value = "Mairwa";
        secondDropdown.add(option4);

        var option5 = document.createElement("option");
        option5.text = "Barharia";
        option5.value = "Barharia";
        secondDropdown.add(option5);

        var option6 = document.createElement("option");
        option6.text = "Basantpur";
        option6.value = "Basantpur";
        secondDropdown.add(option6);

      } else if (category === "Gopalganj") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Gopalganj";
        option1.value = "Gopalganj1";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Mirganj";
        option2.value = "Mirganj";
        secondDropdown.add(option2);

        var option3 = document.createElement("option");
        option3.text = "Dighwa Dubauli";
        option3.value = "Dighwa-Dubauli";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Hathua";
        option4.value = "Hathua";
        secondDropdown.add(option4);

    } else if (category === "East-Champaran") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Motihari";
        option1.value = "Motihari";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Areraj";
        option2.value = "Areraj";
        secondDropdown.add(option2);

        var option3 = document.createElement("option");
        option3.text = "Chakia";
        option3.value = "Chakia";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Raxaul";
        option4.value = "Raxaul";
        secondDropdown.add(option4);

      } else if (category === "Sitamarhi") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Sitamarhi";
        option1.value = "Sitamarhi1";
        secondDropdown.add(option1);

      } else if (category === "Darbhanga") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Darbhanga";
        option1.value = "Darbhanga1";
        secondDropdown.add(option1);

      } else if (category === "Madhubani") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Madhubani";
        option1.value = "Madhubani1";
        secondDropdown.add(option1);

      } else if (category === "Bhojpur") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Arrah";
        option1.value = "Arrah";
        secondDropdown.add(option1);

      } else if (category === "Jehanabad") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Jehanabad";
        option1.value = "Jehanabad1";
        secondDropdown.add(option1);

      } else if (category === "Gaya") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Gaya Jee";
        option1.value = "Gaya1";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Bodh Gaya";
        option2.value = "Bodh-Gaya";
        secondDropdown.add(option2);

    } else if (category === "Nalanda") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Bihar Sarif";
        option1.value = "Bihar-Sarif";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Chandi";
        option2.value = "Chandi";
        secondDropdown.add(option2);

        var option3 = document.createElement("option");
        option3.text = "Islampur";
        option3.value = "Islampur";
        secondDropdown.add(option3);

        var option4 = document.createElement("option");
        option4.text = "Rajgir";
        option4.value = "Rajgir";
        secondDropdown.add(option4);

        var option5 = document.createElement("option");
        option5.text = "Harnaut";
        option5.value = "Harnaut";
        secondDropdown.add(option5);

      } else if (category === "Nawada") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Nawada";
        option1.value = "Nawada1";
        secondDropdown.add(option1);

      } else if (category === "Begusarai") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Begusarai";
        option1.value = "Begusarai1";
        secondDropdown.add(option1);

      } else if (category === "Jamui") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Jamui";
        option1.value = "Jamui1";
        secondDropdown.add(option1);

      } else if (category === "West-Champaran") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Bettiah";
        option1.value = "Bettiah";
        secondDropdown.add(option1);

      } else if (category === "Purnia") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Purnia";
        option1.value = "Purnia1";
        secondDropdown.add(option1);

      } else if (category === "Bhagalpur") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Bhagalpur";
        option1.value = "Bhagalpur1";
        secondDropdown.add(option1);

        var option2 = document.createElement("option");
        option2.text = "Kahalgaon";
        option2.value = "Kahalgaon";
        secondDropdown.add(option2);

      } else if (category === "Munger") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Munger";
        option1.value = "Munger1";
        secondDropdown.add(option1);

      } else if (category === "Samastipur") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Samastipur";
        option1.value = "Samastipur1";
        secondDropdown.add(option1);

      } else if (category === "Lakhisarai") {
        var optionAll = document.createElement("option");
        optionAll.text = "All";
        optionAll.value = "all";
        secondDropdown.add(optionAll);

        var option1 = document.createElement("option");
        option1.text = "Lakhisarai";
        option1.value = "Lakhisarai1";
        secondDropdown.add(option1);

      }
    }

    // Function to filter the items based on the selected values
    function filterItems() {
      var selectedCategory = firstDropdown.value;
      var selectedSubcategory = secondDropdown.value;

      var items = document.querySelectorAll(".item");
      items.forEach(function(item) {
        var itemCategory = item.classList.contains(selectedCategory) || selectedCategory === "all";
        var itemSubcategory = item.classList.contains(selectedSubcategory) || selectedSubcategory === "all";

        if (itemCategory && itemSubcategory) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    }

    // Set the default values for the dropdowns
    firstDropdown.value = "all";

    // Populate the second dropdown with all subcategories by default
    populateSecondDropdown("all");

    // Initially filter the items based on the default values
    filterItems();
