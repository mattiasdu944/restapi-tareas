import { pool } from "../db.js";

export const getCategorias = async (req, res) => {
  try {
    const [response] = await pool.query("SELECT * FROM categoria");
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [response] = await pool.query("SELECT * FROM categoria WHERE id = ?", [id]);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createCategoria = (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    pool.query(
      "INSERT INTO tarea( nombre, descripcion ) VALUES( ?, ? )",
      [nombre, descripcion]
    );
    res.json({ message: "Categoria creada" });

  } catch (error) {
    console.log(error);
  }
};

export const updateCategoria = async (req, res) => {
    try {
        const result = await pool.query('UPDATE categoria SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ])
        res.json({ message: 'Categoria actualizada' })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const [response] = await pool.query("DELETE FROM categoria WHERE id = ?", [id]);
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        console.log(error);
    }
}