<template>
	<div class="container">
		<div class="form-group">
			<label for="placa">Placa</label>
			<input
				type="text"
				class="form-control"
				name="placa"
				id="placa"
				placeholder="9999"
				v-model="placa_input"
				:class="{ 'is-invalid': comprobar }"
				@keyup="calcular"
			/>
		</div>
		<ul class="list-group list-group-flush text-left">
			<!-- <li class="list-group-item">La placa debe contener 3 letras</li> -->
			<li class="list-group-item">La placa debe contener 3 o 4 números</li>
			<li class="list-group-item">La placa no debe ser menor a 3 caracteres</li>
			<li class="list-group-item">La placa no debe ser mayor a 4 caracteres</li>
		</ul>

		<div class="row">
			<div class="form-group col">
				<label for="fecha">Fecha</label>
				<input type="date" class="form-control" name="fecha" id="fecha" v-model="fecha_input" @change="calcular" />
			</div>

			<div class="form-group col">
				<label for="hora">Hora</label>
				<input type="time" class="form-control" name="hora" id="hora" v-model="hora_input" @change="calcular" />
			</div>
		</div>

		<div id="prediction_alert" :class="['alert', alert_type]" role="alert">
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
			hora_input: '',
			prediction: 'Resultado',
			alert_type: 'alert-info',
		};
	},
	methods: {
		no_circula(msg) {
			this.alert_type = 'alert-danger';
			this.prediction = msg;
			return false;
		},
		circula() {
			this.alert_type = 'alert-success';
			this.prediction = 'Puedes circular';
			return true;
		},
		check_time() {
			const morning = ['07:00', '09:30'];
			const afternoon = ['16:00', '19:30'];
			let morning_com = this.hora_input >= morning[0] && this.hora_input <= morning[1];
			let afternoon_com = this.hora_input >= afternoon[0] && this.hora_input <= afternoon[1];
			if (morning_com || afternoon_com) {
				console.log(morning_com || afternoon_com);
				//retorna true si esta dentro de la hora de pico y placa
				return this.no_circula('No puedes circular');
			} else {
				return this.circula();
			}
		},
		check_day() {
			let date = new Date(this.fecha_input);
			if (date.getDay() == 6) {
				return this.circula();
			}

			let placa_par_impar = this.placa_input.slice(-1) % 2;
			let dia_par_impar = (date.getDay() + 1) % 2;

			if (placa_par_impar == dia_par_impar) {
				return this.circula();
			} else {
				return this.check_time();
			}
		},
		calcular() {
			if (!/^[0-9]{3,4}$/.test(this.placa_input)) {
				return this.no_circula('Placa incorrecta');
			} else if (this.fecha_input == '') {
				return this.no_circula('Ingresa una fecha');
			} else if (this.hora_input == '') {
				return this.no_circula('Ingresa una hora');
			} else {
				return this.check_day();
			}
		},
	},
	computed: {
		comprobar() {
			// return !/^[a-zA-Z]{3}[0-9]{3,4}$/.test(this.placa_input);
			return !/^[0-9]{3,4}$/.test(this.placa_input);
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
