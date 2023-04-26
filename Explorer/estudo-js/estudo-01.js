/** 01 */
const f01 = () => {
  let nome = prompt("Qual seu nome?");
  alert(`Olá ${nome}!!`);
};
// f01();

/** 02 */
const f02 = () => {
  const realizaOperacao = (n1, n2, op) => {
    console.log(n1, n2, op);
    n1 = Number(n1);
    n2 = Number(n2);
    console.log(n1, n2, op);
    let result;

    errorMsg = "";
    hasError = false;

    if (!n1) {
      hasError = true;
      errorMsg += " n1=" + n1;
    }

    if (!n2) {
      hasError = true;
      errorMsg += " n2=" + n2;
    }

    switch (op) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        result = n1 / n2;
        break;
      case "%":
        result = n1 % n2;
        break;
      default:
        hasError = true;
        errorMsg += " operador=" + op;
    }

    if (hasError) throw new Error("Parametros invalidos:" + errorMsg);

    return result;
  };

  let n = [];
  alert("Vamos realizar uma operacao de dois numeros");
  n[0] = prompt("Entre com primeiro valor");
  n[1] = prompt("Entre com o segundo valor");
  n[2] = prompt("Entre com a operacao");
  try {
    let result = realizaOperacao(n[0], n[1], n[2]);
    alert(`${n[0]} ${n[2]} ${n[1]} = ${result}`);
  } catch (er) {
    alert(er);
  }
};
// f02();

/** 03 */
const f03 = () => {
  let nome, notas, media, msg, isAprovado;

  nome = prompt("Entre com o nome");

  notas = [];
  notas.push(prompt("Entre com a primeira nota"));
  notas.push(prompt("Entre com a segunda nota"));
  notas.push(prompt("Entre com a terceira nota"));

  media = 0.0;
  media += Number(notas[0]) + Number(notas[1]) + Number(notas[2]);
  media /= 3;
  media = media.toFixed(2);

  msg = `Media de ${nome}: ${media}.\n`;

  isAprovado = media >= 5;

  if (!isAprovado) msg += "Reprovado. Tente outra vez!";
  else msg += "Aprovado! Parabens!";

  alert(msg);
};
// f03();

/** 04 */
const f04 = () => {
  let lst, saida;
  lst = new Array(5);
  for (let i = 0; i < lst.length; i++) {
    lst[i] = prompt(`Item ${i + 1}/${lst.length}`);
  }
  saida = "Itens: [";
  for (const item of lst) {
    saida += ` ${item},`;
  }
  saida = saida.slice(0, saida.length - 1);
  saida += " ]";

  alert(saida);
};
// f04();

/** 05 */
const f05 = () => {
  let msg, tentativas;

  const x = (Math.random() * 10 + 1).toFixed(0);
  tentativas = [];

  while (true) {
    let y = prompt("Advinhe o numero 'x' que estou pensando [0 < x <= 10]");
    let isEqual = x == y;
    tentativas.push(y);

    console.log(y + " = " + x + " ? " + isEqual);

    if (isEqual) break;

    msg = "Errou !!!\n";
    msg += `Numero de tentativas: ${tentativas.length}\n`;
    msg += `Tentativas: ${tentativas}`;
    alert(msg);
  }

  msg = `Acertou !!!\n`;
  msg += `Numero sorteado: ${x}\n`;
  msg += `Numero tentativas: ${tentativas.length}\n`;
  msg += `Tentativas: ${tentativas}`;

  alert(msg);
};
// f05();

/** 06 */
const f06 = () => {
  let opt;

  const getOption = () => {
    let msg, opt, lst;

    msg = `Ola! Digite o numero da opcao desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`;

    opt = prompt(msg);
    console.log(`Opcao selecionada: ${opt}`);
    return opt;
  };

  const addNewItem = (lst = []) => {
    let msg, newItem;

    console.log(`Lista: [${lst}]`);

    msg = `Qual o item a ser adicionado na lista?`;

    newItem = prompt(msg).toLowerCase();
    console.log(`Novo item: ${newItem}`);

    if (lst.includes(newItem)) {
      console.log(`${newItem} ja existe na [${lst}]`);
      throw "Item ja foi adicionado.";
    }

    lst.push(newItem);
    console.log(`Nova Lista antes do sort: [${lst}]`);

    lst.sort();
    console.log(`Nova Lista apos o sort: [${lst}]`);

    // return lst;
  };

  const showList = (lst = []) => {
    alert(`Lista: [${lst}]`);
    console.log(`Lista: [${lst}]`);
  };

  lst = [];

  while (true) {
    opt = getOption();

    switch (Number(opt)) {
      case 3:
        console.log("Sair");
        return;
      case 2:
        console.log("Exibir lista");
        showList(lst);
        break;
      case 1:
        console.log("Adicionar novo elemento");
        try {
          addNewItem(lst);
        } catch (e) {
          alert(e);
        }
        break;
      default:
        console.log("Opcao Invalida");
        alert("Opcao Invalida");
        break;
    }
  }
};
// f06();

const f07 = () => {
  let lst = [];
  let opt;

  const getOption = () => {
    let msg, opt, lst;

    msg = `Ola! Digite o numero da opcao desejada
    1. Cadastrar novo paciente
    2. Mostrar pacientes cadastrados
    3. Sair do programa`;

    opt = prompt(msg);
    console.log(`Opcao selecionada: ${opt}`);
    return opt;
  };

  const criaPaciente = (nome = "", idade = 0, peso = 0.0, altura = 0.0) => {
    function Paciente(nome = "", idade = 0, peso = 0.0, altura = 0.0) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
    }

    return new Paciente(nome, idade, peso, altura);
  };

  const cadastraPaciente = (lst = []) => {
    console.log("Cadastra Paciente");
    let nome, idade, peso, altura;

    alert("Entre com os dados do paciente a ser cadastrado");

    nome = prompt("Nome");
    idade = prompt("Idade");
    peso = prompt("Peso");
    altura = prompt("Altura");

    console.log(nome + " " + idade + " " + peso + " " + altura);

    const novoPaciente = criaPaciente(nome, idade, peso, altura);

    novoPaciente.toString = function () {
      let s = `{ nome: ${this.nome}, idade: ${this.idade}, `;
      s += `peso: ${this.peso}, altura: ${this.altura} }`;

      return s;
    };

    console.log(`\tNovo Paciente: ${novoPaciente}`);

    console.log(`\tLista antes da inclusao: [ ${lst} ]`);

    lst.push(novoPaciente);

    console.log(`\tLista apos a inclusao: [ ${lst} ]`);

    return lst;
  };

  const exibePacientes = (lst = []) => {
    let msg = "";

    for (const paciente of lst) {
      msg += `\t[${lst.indexOf(paciente) + 1}/${lst.length}] `;

      msg += paciente.toString();

      msg += `\n`;
    }

    console.log("Exibe Pacientes");
    console.log(`${msg}`);

    alert(msg);
  };

  while (true) {
    opt = getOption();

    switch (Number(opt)) {
      case 3:
        console.log("Sair");
        return;
      case 2:
        console.log("Exibir Pacientes");
        exibePacientes(lst);
        break;
      case 1:
        console.log("Cadastrar novo paciente");
        cadastraPaciente(lst);
        break;
      default:
        console.log("Opcao Invalida");
        alert("Opcao Invalida");
        break;
    }
  }
};
// f07();

const f08 = () => {
  let pacientes;

  const criaPaciente = (nome = "", idade = 0, peso = 0.0, altura = 0.0) => {
    function Paciente(nome = "", idade = 0, peso = 0.0, altura = 0.0) {
      this.nome = nome;
      this.idade = idade;
      this.peso = peso;
      this.altura = altura;
    }

    return new Paciente(nome, idade, peso, altura);
  };

  const geraPacientes = (nPacientes = 0) => {
    let pacientes = [];

    for (let i = 0; i < nPacientes; i++) {
      pacientes.push(
        criaPaciente(
          `Paciente ${i + 1}`,
          Math.floor(Math.random() * 30) + 18,
          (Math.random() * 50).toFixed(2) + 40,
          Math.floor(Math.random() * 50) + 140
        )
      );
    }
    return pacientes;
  };

  const getIMC = (peso, altura) => {
    altura /= 100;
    return (peso / altura ** 2).toFixed(3);
  };

  const exibeIMCs = (pacientes) => {
    let msg = "";
    for (const paciente of pacientes) {
      msg += `IMC de ${paciente.nome}: ${getIMC(
        paciente.peso,
        paciente.altura
      )}\n`;
    }
    alert(msg);
  };

  pacientes = geraPacientes(5);

  pacientes.push(criaPaciente("Ze", 18, 90, 175));

  exibeIMCs(pacientes);
};
// f08();
