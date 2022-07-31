import { pool } from "../db.js";

export const getIntervalos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM intervalo")
    res.json(result);

  } catch (error) {
    console.log(error);
  }
};

export const createIntervalo = (req, res) => {
  try {
    const { hora_inicio, hora_fin, fecha_inicio, fecha_fin } = req.body;

    pool.query(
      "INSERT INTO intervalo( hora_inicio, hora_fin, fecha_inicio, fecha_fin ) VALUES( ?, ?, ?, ? )",
      [hora_inicio, hora_fin, fecha_inicio, fecha_fin]
    );
    res.json({ message: "Intervalo creado" });
  } catch (error) {
    console.log(error);
  }
};

export const updateIntervalo = async (req, res) => {
  try {
    const result = await pool.query("UPDATE intervalo SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({ message: "Intervalo actualizada" });
  } catch (error) {
    console.log(error);
  }
};

export const deleteIntervalo = async (req, res) => {
  try {
    const { id } = req.params;
    const [response] = await pool.query("DELETE FROM intervalo WHERE id = ?", [
      id,
    ]);
    res.json({ message: "Intervalo eliminado" });
  } catch (error) {
    console.log(error);
  }
};
