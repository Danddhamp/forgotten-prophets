(function () {
            var quotes = document.querySelectorAll('#quotes p.quote');
            if (!quotes.length) return;
            var chosen = Math.floor(Math.random() * quotes.length);
            quotes.forEach(function (el, i) {
                if (i !== chosen) el.style.display = 'none';
            });
        })();