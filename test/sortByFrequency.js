'use strict';

QUnit.module("Тестируем функцию sortByFrequency", function () {
    QUnit.test("Работает правильно с сортировкой по частоте появления", function (assert) {
        const result = sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]);

        assert.deepEqual(result, [2, 2, 2, 2, 4, 4, 4, 6, 6], "Массив должен быть отсортирован по частоте.");
    });

    QUnit.test("Работает правильно с пустым массивом", function (assert) {
        const result = sortByFrequency([]);

        assert.deepEqual(result, [], "Пустой массив должен вернуть пустой массив.");
    });

    QUnit.test("Работает правильно с массивом с одним элементом", function (assert) {
        const result = sortByFrequency([5]);

        assert.deepEqual(result, [5], "Массив с одним элементом должен вернуть тот же элемент.");
    });

    QUnit.test("Работает правильно при одинаковой частоте элементов", function (assert) {
        const result = sortByFrequency([3, 1, 2]);

        assert.deepEqual(result, [3, 1, 2], "При одинаковой частоте сохраняется исходный порядок первого появления.");
    });

    QUnit.test("Работает правильно с отрицательными числами", function (assert) {
        const result = sortByFrequency([-10, 5, -10, 0, 5, -10]);

        assert.deepEqual(result, [-10, -10, -10, 5, 5, 0], "Отрицательные числа корректно сортируются по частоте.");
    });

    QUnit.test("Работает правильно, когда все элементы одинаковые", function (assert) {
        const result = sortByFrequency([7, 7, 7, 7]);

        assert.deepEqual(result, [7, 7, 7, 7], "Массив одинаковых элементов возвращает копию исходного.");
    });
});
