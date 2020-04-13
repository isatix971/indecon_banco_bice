import { IndicatorResolver } from "../src/resolvers/IndicatorResolver";
import { buildIndicatorMock } from "./indicator.data";
import { GetIndeconApi } from "../src/gateway/GetIndeconApi";
import { IndicatorValues } from "../src/models/IndicatorValues";


describe("microservicio indicadores economicos indecon", () => {

    test("se obtienen datos desde api indecon", async() => {

        const indicatorMock = buildIndicatorMock({});
        GetIndeconApi.prototype.getIndicator = jest.fn().mockReturnValue(indicatorMock);
        IndicatorValues.findOne = jest.fn().mockReturnValue(indicatorMock);

        let ind = new IndicatorResolver();
        let result = ind.getIndicatorValues();
        expect(result).toBeDefined();
        
    });

});