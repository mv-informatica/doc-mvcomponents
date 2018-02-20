define(["require", "exports", "jquery", "./http"], function (require, exports, jquery, http_1) {
    "use strict";
    describe('Request', function () {
        it('espera-se que a requisição ajax seja executada', function (done) {
            jquery.ajax('any').then(function () { return done(); }, function () { return done(); });
        });
        it('espera-se que os dados obtidos pelo get estejam corretos', function (done) {
            http_1.$http.get('base/test/mock/simple-data.json')
                .then(function (data) {
                expect(data).toEqual(jasmine.objectContaining({ a: 1, b: 2 }));
                done();
            });
        });
        it('espera-se que uma respsota seja tratada como accept', function (done) {
            http_1.$http.get('/base/test/mock/empty')
                .then(function (data) { return data; })
                .catch(function (err) { return Promise.reject(err); })
                .then(function (data) {
                expect(data).toBe('');
                done();
            });
        });
        it('espera-se que os dados enviados pelo params estejam corretos', function (done) {
            http_1.$http
                .get('any')
                .params({ a: 1, b: 2 })
                .then(function () { return null; }, function (err, request) {
                expect(request.url).toBe('any?a=1&b=2');
                done();
            });
        });
        it('espera-se que os dados enviados pelo params, de forma tradicional, estejam corretos', function (done) {
            http_1.$http
                .get('any')
                .params({ a: [1, 2] }, true)
                .then(function () { return null; }, function (err, request) {
                expect(request.url).toBe('any?a=1&a=2');
                done();
            });
        });
        it('espera-se que os headers sejam enviados', function (done) {
            http_1.$http
                .get('any')
                .header({ 'Authentication': 'Basic 1234' })
                .then(function () { return null; }, function (err, request) {
                expect(request.headers).toEqual(jasmine.objectContaining({
                    'Authentication': 'Basic 1234'
                }));
                done();
            });
        });
        it('espera-se que os dados enviados body estejam corretos', function (done) {
            var data = { a: 2, b: 2 };
            http_1.$http
                .post('any')
                .body(data)
                .then(function () { return null; }, function (err, request) {
                expect(request.data).toBe(JSON.stringify(data));
                done();
            });
        });
    });
});

//# sourceMappingURL=request.spec.js.map
