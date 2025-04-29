const db = require('../config/db');

const Disciplina = {
    inserir_disciplina: async (nome, id) => {
        try {
          const [result] = await db.execute('INSERT INTO cliente (nome, id) VALUES (?,?)', [nome, id]);
          return { nome, id };
        } catch (error) {
          throw error;
        }
      },
    }    