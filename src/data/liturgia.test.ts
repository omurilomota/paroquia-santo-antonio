import { describe, expect, it } from "vitest";
import {
  diaLiturgico,
  formatarDataCurta,
  pascoa,
  primeiroAdvento,
  proximaMissa,
  sameDay,
} from "./liturgia";

describe("cálculo da Páscoa", () => {
  it("acerta as datas conhecidas do calendário gregoriano", () => {
    expect(formatarDataCurta(pascoa(2024))).toBe("31/03/2024");
    expect(formatarDataCurta(pascoa(2025))).toBe("20/04/2025");
    expect(formatarDataCurta(pascoa(2026))).toBe("05/04/2026");
    expect(formatarDataCurta(pascoa(2027))).toBe("28/03/2027");
  });

  it("coloca o primeiro Advento no quarto domingo antes do Natal", () => {
    expect(formatarDataCurta(primeiroAdvento(2026))).toBe("29/11/2026");
    expect(primeiroAdvento(2026).getDay()).toBe(0);
  });
});

describe("tempo litúrgico", () => {
  it("reconhece a Páscoa, o Natal e a Quaresma", () => {
    const pascoa2026 = diaLiturgico(new Date(2026, 3, 5));
    expect(pascoa2026.tempo).toBe("Tempo Pascal");
    expect(pascoa2026.cor).toBe("ouro");

    const natal = diaLiturgico(new Date(2026, 11, 25));
    expect(natal.tempo).toBe("Tempo do Natal");
    expect(natal.cor).toBe("ouro");

    const cinzas = diaLiturgico(new Date(2026, 1, 18));
    expect(cinzas.tempo).toBe("Quaresma");
    expect(cinzas.cor).toBe("roxo");
  });

  it("marca o domingo de Ramos e a Semana Santa", () => {
    const ramos = diaLiturgico(new Date(2026, 2, 29));
    expect(ramos.tempo).toBe("Semana Santa");
    expect(ramos.cor).toBe("vermelho");
  });

  it("compara dias ignorando o horário", () => {
    expect(sameDay(new Date(2026, 9, 26, 1), new Date(2026, 9, 26, 23))).toBe(true);
    expect(sameDay(new Date(2026, 9, 26), new Date(2026, 9, 27))).toBe(false);
  });
});

describe("próxima missa", () => {
  it("encontra a missa das 7h na segunda-feira cedo", () => {
    const missa = proximaMissa(new Date(2026, 9, 26, 6, 0));
    expect(missa?.quando.getDay()).toBe(1);
    expect(missa?.quando.getHours()).toBe(7);
    expect(missa?.nome).toBe("Missa ferial");
  });

  it("pula para o dia seguinte quando a missa do dia já passou", () => {
    const missa = proximaMissa(new Date(2026, 9, 26, 8, 0));
    expect(missa?.quando.getDay()).toBe(2);
    expect(missa?.quando.getHours()).toBe(7);
  });

  it("à noite de domingo aponta para a missa de segunda às 7h", () => {
    const missa = proximaMissa(new Date(2026, 9, 25, 20, 0));
    expect(missa?.quando.getDay()).toBe(1);
    expect(missa?.quando.getHours()).toBe(7);
  });

  it("não retorna data no passado e calcula a contagem", () => {
    const agora = new Date(2026, 9, 26, 6, 0);
    const missa = proximaMissa(agora);
    expect(missa).not.toBeNull();
    expect(missa!.quando.getTime()).toBeGreaterThan(agora.getTime());
    expect(missa!.em.horas).toBe(1);
    expect(missa!.em.minutos).toBe(0);
  });
});
