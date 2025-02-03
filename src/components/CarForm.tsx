import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName, RootState } from "../store";
import { ChangeEvent, FormEvent } from "react";

export function CarForm() {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => {
    return state.form.name;
  });

  const cost = useSelector((state: RootState) => {
    return state.form.cost;
  });

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event: ChangeEvent<HTMLInputElement>) => {
    const carCost = Number(event.target.value);
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(
      addCar({
        name,
        cost,
      })
    );
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
          <div className="field">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
