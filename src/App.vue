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
				min="6"
				max="7"
				:class="{ 'is-invalid': comprobar }"
				@keyup.enter="calcular"
			/>
		</div>
		

		<div class="form-group">
			<label for="fecha">Fecha</label>
			<input type="date" class="form-control" name="fecha" id="fecha" v-model="fecha_input" @change="calcular" />
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
		};
	},
	methods: {
		calcular() {
			console.log(this.placa_input);
		},
	},
	computed: {
		comprobar() {
			return (
				this.placa_input.length < 7 || this.placa_input.length > 7 || !(/[a-zA-Z]{3}[0-9]{4}/.test(this.placa_input))
			);
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
