import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('app validations work', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallowMount(App);
	});

	it('placa validation', () => {
		expect(wrapper.vm.calcular()).toBeFalsy();
	});

	it('fecha validation', () => {
		wrapper.find('#placa').setValue('2222');
		expect(wrapper.vm.calcular()).toBeFalsy();
	});

	it('hora validation', () => {
		wrapper.find('#placa').setValue('2222');
		wrapper.find('#fecha').setValue('22223');
		expect(wrapper.vm.calcular()).toBeFalsy();
	});

	it('placa par circula, hora', () => {
		wrapper.find('#placa').setValue('2222');
		wrapper.find('#fecha').setValue('2021-03-17');
		wrapper.find('#hora').setValue('13:05');
		expect(wrapper.vm.calcular()).toBeTruthy();
	});

	it('placa par no circula, hora', () => {
		wrapper.find('#placa').setValue('2222');
		wrapper.find('#fecha').setValue('2021-03-17');
		wrapper.find('#hora').setValue('07:05');
		expect(wrapper.vm.calcular()).toBeFalsy();
	});

	it('placa par circula, dia', () => {
		wrapper.find('#placa').setValue('2222');
		wrapper.find('#fecha').setValue('2021-03-18');
		wrapper.find('#hora').setValue('13:05');
		expect(wrapper.vm.calcular()).toBeTruthy();
	});
});
