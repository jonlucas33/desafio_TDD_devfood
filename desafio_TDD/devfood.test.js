// devfood.test.js
const { calcularTotalItens, calcularFrete, processarPedido } = require('./devfood');

function rodarTestes() {
    console.clear();
    console.log("=== AVALIAÇÃO TÉCNICA: DEVFOOD ===\n");
    
    let erros = 0;
    let acertos = 0;

    const assert = (id, esperado, obtido) => {
        if (esperado === obtido) {
            console.log(`✅ ${id}`);
            acertos++;
        } else {
            console.log(`❌ ${id} | Esperado: ${esperado} | Obtido: ${obtido}`);
            erros++;
        }
    };

    // --- BLOCO 1: SOMA DE ITENS ---
    assert("Teste 01 (Soma Simples)", 35, calcularTotalItens([10, 20, 5]));
    assert("Teste 02 (Lista Vazia)", 0, calcularTotalItens([]));
    assert("Teste 03 (Item Único)", 100, calcularTotalItens([100]));

    // --- BLOCO 2: CÁLCULO DE FRETE (Base: R$2/km | Extra > 5km: +R$3) ---
    assert("Teste 04 (3km - Padrão)", 6, calcularFrete(3, false, 50));
    assert("Teste 05 (5km - Limite)", 10, calcularFrete(5, false, 50));
    assert("Teste 06 (6km - Com Taxa)", 15, calcularFrete(6, false, 50));

    // --- BLOCO 3: REGRA VIP (Grátis se VIP E > 80) ---
    assert("Teste 07 (VIP Rico - Grátis)", 0, calcularFrete(10, true, 100));
    assert("Teste 08 (VIP Pobre - Paga)", 20, calcularFrete(10, true, 50));
    assert("Teste 09 (VIP Limite 80 - Paga)", 20, calcularFrete(10, true, 80));
    assert("Teste 10 (Não VIP Rico - Paga)", 20, calcularFrete(10, false, 100));

    // --- BLOCO 4: INTEGRAÇÃO (Pedido Completo) ---
    // Pedido 1: Itens(90) + Frete(4km = 8) = 98
    const p1 = { precos: [50, 40], distancia: 4, vip: false };
    assert("Teste 11 (Integração Normal)", 98, processarPedido(p1));

    // Pedido 2: Itens(150) + Frete(VIP > 80 = 0) = 150
    const p2 = { precos: [100, 50], distancia: 20, vip: true };
    assert("Teste 12 (Integração VIP)", 150, processarPedido(p2));

    console.log(`\n---------------------------------`);
    console.log(`NOTA FINAL: ${acertos} de 12 Acertos`);
}

rodarTestes();