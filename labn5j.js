        let array_of_correct_answers = ['2', '1', '3', 'Курт Кобейн', 'Gordon Sumner', 'The four horsemen', 'Unforgiven 2', 'Axl Rose', 'Foo Fighters', 'Курт Кобейн', 'Дэвид Боуи'];
        let numner_questions = 10;
        let a = [];
        function proverka(j = 0) {
            let elements = document.getElementsByName(j);
            for (let i = 0, len = elements.length; i < len; ++i) {
                if(elements[i].type=="text")
                    a.push(elements[i].value);
                if (elements[i].checked)
                    a.push(elements[i].value);
            }
            j++;
            if (j < numner_questions)
                proverka(j);
            return a;
        }
        function cout() {
            let n = 0;
            let p = proverka();
             if (p.length < numner_questions) {
              alert("Ответьте на все вопросы")
             }
             else {
            for (let i = 0; i < numner_questions; i++) {
                if (p[i] == array_of_correct_answers[i]) {
                    n++;
                }
            }
            document.getElementById('id01').style.display = 'block'
            document.getElementById("sss").innerHTML = "Првильных ответов: " + n;
             }
        }

