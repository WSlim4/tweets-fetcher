import React from "react";
import "./styles.scss";

export default function InputText({ placeholder = "Pesquisar" }) {
    return (
        <div class="form__group field">
            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
            <label for="name" class="form__label">{placeholder}</label>
        </div>
    )
}