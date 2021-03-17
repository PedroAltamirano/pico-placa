<template>
	<div class="container">
		<div class="form-group">
			<label for="placa">Placa</label>
			<input
				type="text"
				class="form-control"
				name="placa"
				id="placa"
				placeholder="PCA9999"
				v-model="placa_input"
				:class="{ 'is-invalid': comprobar }"
				@keyup.enter="calcular"
			/>
		</div>
		<ul class="list-group list-group-flush text-left">
			<!-- <li class="list-group-item">La placa debe contener 3 letras</li> -->
			<li class="list-group-item">La placa debe contener 3 o 4 números</li>
			<li class="list-group-item">La placa no debe ser menor a 3 caracteres</li>
			<li class="list-group-item">La placa no debe ser mayor a 4 caracteres</li>
		</ul>

		<div class="form-group">
			<label for="fecha">Fecha</label>
			<input type="date" class="form-control" name="fecha" id="fecha" v-model="fecha_input" @change="calcular" />
		</div>

		<div :class="['alert', alert_type]" role="alert">
			<strong>{{ prediction }}</strong>
		</div>

		<button type="button" @click="calcular" class="btn btn-primary btn-block">Revisar placa</button>
	</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			placa_input: '',
			fecha_input: '',
			prediction: 'Resultado',
			alert_type: 'alert-info',
		};
	},
	methods: {
		calcular() {
			console.log(this.placa_input);
			// if (!/^[a-zA-Z]{3}[0-9]{3,4}$/.test(this.placa_input)) {
			if (!/^[0-9]{3,4}$/.test(this.placa_input)) {
				this.alert_type = 'alert-danger';
				this.prediction = 'Placa incorrecta';
			} else {
				this.alert_type = 'alert-success';
				this.prediction = 'computando';
			}
		},
	},
	computed: {
		comprobar() {
			return !/^[a-zA-Z]{3}[0-9]{3,4}$/.test(this.placa_input);
		},
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
