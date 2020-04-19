function myPromise(fn) {
    let self = this;
    this.status = 'padding';
    this.value = '';
    this.resion = '';
    this.resolveArr = [];
    this.rejectArr = [];

    function resolve(value) {
        if (self.status == 'padding') {
            self.value = value;
            self.status = 'resolved';
            self.resolveArr.forEach((_) => _());
        }
    }
    function reject(reason) {
        if (self.status == 'padding') {
            self.value = reason;
            self.status = 'rejected';
            self.rejectArr.forEach((i) => i());
        }
    }
    try {
        fn(resolve, reject);
    } catch (error) {
        reject(error);
    }
}
Promise.prototype.then = function (onResolve, onReject) {
    if (this.status == 'rejected') {
        onReject(this.reason);
    }
};

new myPromise(function (resolve, reject) {
    resolve(1);
}).then(function (value) {
    console.log(value);
});
