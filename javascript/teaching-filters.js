const searchBar = document.getElementById("searchBar");
        const callingFilter = document.getElementById("callingFilter");
        const typeFilter = document.getElementById("typeFilter");
        const tiles = document.querySelectorAll(".teaching-tile");

        function filterTeachings() {
            const search = searchBar.value.toLowerCase().trim();
            const calling = callingFilter.value;
            const type = typeFilter.value;

            tiles.forEach(tile => {
                const tileText = tile.innerText.toLowerCase();
                const tileCalling = tile.dataset.calling || "";
                const tileType = tile.dataset.type || "";

                const matchesSearch = search === "" || tileText.includes(search);
                const matchesCalling = calling === "all" || tileCalling === calling;
                const matchesType = type === "all" || tileType === type;

                if (matchesSearch && matchesCalling && matchesType) {
                    tile.style.display = ""; // Let CSS control the tile display
                } else {
                    tile.style.display = "none";
                }
            });
        }

        searchBar.addEventListener("input", filterTeachings);
        callingFilter.addEventListener("change", filterTeachings);
        typeFilter.addEventListener("change", filterTeachings);