Object.defineProperty(exports, "__esModule", { value: true });
exports.GETResponseMatch = void 0;
function GETResponseMatch(response, cases) {
    if (Array.isArray(response)) {
        return cases.list ? cases.list(response) : cases.default(response);
    }
    else if (response.hasOwnProperty("records") && response.hasOwnProperty("totals")) {
        return cases.page ? cases.page(response) : cases.default(response);
    }
    else {
        return cases.single ? cases.single(response) : cases.default(response);
    }
}
exports.GETResponseMatch = GETResponseMatch;
//# sourceMappingURL=types.js.map