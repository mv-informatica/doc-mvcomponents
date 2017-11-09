define(["require", "exports", "./enum/e-event-emitter-status"], function (require, exports, e_event_emitter_status_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventInsc = (function () {
        function EventInsc(refid, peventEmitter) {
            this.ref = refid;
            this.eventInst = peventEmitter;
        }
        EventInsc.prototype.cancel = function () {
            this.eventInst.unsubscribe(this);
            delete this.eventInst;
        };
        return EventInsc;
    }());
    exports.EventInsc = EventInsc;
    var EventEmitter = (function () {
        function EventEmitter(config) {
            if (config === void 0) { config = {}; }
            this.config = config;
            this._next_iterator = 0;
            this._cancel_next = false;
        }
        EventEmitter.prototype.emit = function (value) {
            var _this = this;
            var hasCancel = this._cancel_next;
            if (hasCancel) {
                this._cancel_next = false;
            }
            else if (this.hasSubscribers()) {
                var _toremove_1 = [];
                hasCancel = !this._events.every(function (_sub) {
                    _sub.handler(value);
                    if (_sub.once) {
                        _toremove_1.push({ ref: _sub.ref });
                    }
                    if (_this._cancel_next) {
                        _this._cancel_next = false;
                        return false;
                    }
                    return true;
                });
                _toremove_1.forEach(function (_subref) { return _this.unsubscribe(_subref); });
            }
            this._lastvalue = value;
            return {
                done: function (p_onSuccess, p_onError) {
                    if (!hasCancel) {
                        p_onSuccess();
                    }
                    else if (p_onError) {
                        p_onError({
                            error: "error: there is a cancel solicitation",
                            status: e_event_emitter_status_1.EEventEmitterStatus.CANCELED
                        });
                    }
                }
            };
        };
        EventEmitter.prototype.next = function (value) {
            if (this.hasSubscribers()) {
                this._events[this._next_iterator].handler(value);
                this._next_iterator++;
            }
        };
        EventEmitter.prototype.getRefId = function () {
            return new Date().getTime() + "#" + this._events.length;
        };
        EventEmitter.prototype.subscribe = function (p_callback) {
            if (!this._events) {
                this._events = [];
            }
            var ref = this.getRefId();
            this._events.push({ ref: ref, handler: p_callback });
            return new EventInsc(ref, this);
        };
        EventEmitter.prototype.once = function (p_callback) {
            if (!this._events) {
                this._events = [];
            }
            var ref = this.getRefId();
            this._events.push({ ref: ref, handler: p_callback, once: true });
            return new EventInsc(ref, this);
        };
        EventEmitter.prototype.hasSubscribers = function () {
            if (this._events) {
                return this._events.length > 0;
            }
            return false;
        };
        EventEmitter.prototype.unsubscribeAll = function () {
            this._events = [];
        };
        EventEmitter.prototype.cancel = function () {
            this._cancel_next = true;
        };
        EventEmitter.prototype.unsubscribe = function (subscribe) {
            if (this.hasSubscribers()) {
                var indx_1 = -1;
                this._events.every(function (p_sub, p_indx) {
                    if (p_sub.ref === subscribe.ref) {
                        indx_1 = p_indx;
                        return false;
                    }
                    return true;
                });
                if (indx_1 > -1) {
                    this._events.splice(indx_1, 1);
                }
            }
        };
        Object.defineProperty(EventEmitter.prototype, "emittedValue", {
            get: function () {
                return this._lastvalue;
            },
            enumerable: true,
            configurable: true
        });
        return EventEmitter;
    }());
    exports.EventEmitter = EventEmitter;
});

//# sourceMappingURL=event-emitter.js.map
