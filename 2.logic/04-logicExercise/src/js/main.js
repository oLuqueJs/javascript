function main() {
    const form = document.querySelector('.formularioIMC');
    const result = document.querySelector('.result');

    function imcTable(imc) {
        if (imc < 18.5) {
            return ('Abaixo do Peso');
            } else if (imc <= 24.9) {
                return ('Peso Normal');
                } else if (imc <= 29.9) {
                    return ('Sobrepeso');
                    } else if (imc <= 34.9) {
                        return ('Obesidade Grau 1');
                        } else if (imc <= 39.9) {
                            return ('Obesidade Grau 2');
                            } else if (imc > 40) {
                                return('Obesidade Grau 3');
        };
    };

    function imcCalculator(peso, altura) {
        let imc = peso / (altura * altura);
        table = imcTable(imc);
        results = [imc.toFixed(1), table]
        return results;
    }

    function getEventForm(event) {
        event.preventDefault();

        const getPeso   =   (form.querySelector('#peso'))
        const getAltura =   (form.querySelector('#altura'))
        let numPeso = parseFloat(getPeso.value)
        let numAltura = parseFloat(getAltura.value)

        if (numPeso > 600 || numAltura > 2.7) {
            console.log('Erro de Inserção');
            return 0;
        }

        let formResponse = imcCalculator(numPeso, numAltura);

        result.innerHTML = (``);
        result.innerHTML = (`
            <p><strong>
            O seu IMC é: ${formResponse[0]}<br>
            A sua categoria é: ${formResponse[1]}
            <strong/><p/>
        `);
    }
    form.addEventListener('submit', getEventForm);
}
main();
