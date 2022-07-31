import { pool } from "../db.js";

export const getTareas = async (req, res) => {
  try {
    const [response] = await pool.query("SELECT t.titulo, t.descripcion, c.nombre, t.estado, i.hora_inicio, i.hora_fin, i.fecha_inicio, i.fecha_fin FROM tarea AS t INNER JOIN categoria AS c ON t.categoria = c.id INNER JOIN intervalo AS i ON t.intervalo = i.id");
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const getTarea = async (req, res) => {
  try {
    const { id } = req.params;
    const [response] = await pool.query("SELECT * FROM tarea WHERE id = ?", [id]);
    res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createTarea = (req, res) => {
  try {
    const { titulo, descripcion, categoria, estado, intervalo } = req.body;

    pool.query(
      "INSERT INTO tarea( titulo, descripcion, categoria, estado, intervalo ) VALUES( ?, ?, ?, ?, ? )",
      [titulo, descripcion, categoria, estado, intervalo]
    );
    res.json({ message: "Tarea creada" });

  } catch (error) {
    console.log(error);
  }
};

export const updateTarea = async (req, res) => {
    try {
        const result = await pool.query('UPDATE tarea SET ? WHERE id = ?', [
            req.body,
            req.params.id
        ])
        res.json({ message: 'Tarea actualizada' })
        
    } catch (error) {
        console.log(error);
    }
}

export const deleteTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const [response] = await pool.query("DELETE FROM tarea WHERE id = ?", [id]);
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        console.log(error);
    }
}