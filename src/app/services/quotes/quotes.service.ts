import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  fakeResponse = {
    "Meta Data": {
        "1. Information": "Daily Time Series with Splits and Dividend Events",
        "2. Symbol": "AAPL",
        "3. Last Refreshed": "2021-07-30",
        "4. Output Size": "Compact",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2021-07-30": {
            "1. open": "144.38",
            "2. high": "146.33",
            "3. low": "144.11",
            "4. close": "145.86",
            "5. adjusted close": "145.86",
            "6. volume": "70440626",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-29": {
            "1. open": "144.685",
            "2. high": "146.55",
            "3. low": "144.58",
            "4. close": "145.64",
            "5. adjusted close": "145.64",
            "6. volume": "54323047",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-28": {
            "1. open": "144.81",
            "2. high": "146.97",
            "3. low": "142.54",
            "4. close": "144.98",
            "5. adjusted close": "144.98",
            "6. volume": "118931191",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-27": {
            "1. open": "149.12",
            "2. high": "149.21",
            "3. low": "145.55",
            "4. close": "146.77",
            "5. adjusted close": "146.77",
            "6. volume": "104818578",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-26": {
            "1. open": "148.27",
            "2. high": "149.83",
            "3. low": "147.7",
            "4. close": "148.99",
            "5. adjusted close": "148.99",
            "6. volume": "72434089",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-23": {
            "1. open": "147.55",
            "2. high": "148.7177",
            "3. low": "146.92",
            "4. close": "148.56",
            "5. adjusted close": "148.56",
            "6. volume": "71447416",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-22": {
            "1. open": "145.935",
            "2. high": "148.195",
            "3. low": "145.81",
            "4. close": "146.8",
            "5. adjusted close": "146.8",
            "6. volume": "77338156",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-21": {
            "1. open": "145.53",
            "2. high": "146.13",
            "3. low": "144.63",
            "4. close": "145.4",
            "5. adjusted close": "145.4",
            "6. volume": "74993460",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-20": {
            "1. open": "143.46",
            "2. high": "147.0997",
            "3. low": "142.96",
            "4. close": "146.15",
            "5. adjusted close": "146.15",
            "6. volume": "96350036",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-19": {
            "1. open": "143.75",
            "2. high": "144.07",
            "3. low": "141.67",
            "4. close": "142.45",
            "5. adjusted close": "142.45",
            "6. volume": "121434571",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-16": {
            "1. open": "148.46",
            "2. high": "149.76",
            "3. low": "145.88",
            "4. close": "146.39",
            "5. adjusted close": "146.39",
            "6. volume": "93251426",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-15": {
            "1. open": "149.24",
            "2. high": "150.0",
            "3. low": "147.09",
            "4. close": "148.48",
            "5. adjusted close": "148.48",
            "6. volume": "106820297",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-14": {
            "1. open": "148.1",
            "2. high": "149.57",
            "3. low": "147.68",
            "4. close": "149.15",
            "5. adjusted close": "149.15",
            "6. volume": "127050785",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-13": {
            "1. open": "144.03",
            "2. high": "147.46",
            "3. low": "143.63",
            "4. close": "145.64",
            "5. adjusted close": "145.64",
            "6. volume": "100827099",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-12": {
            "1. open": "146.21",
            "2. high": "146.32",
            "3. low": "144.0",
            "4. close": "144.5",
            "5. adjusted close": "144.5",
            "6. volume": "76299719",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-09": {
            "1. open": "142.75",
            "2. high": "145.65",
            "3. low": "142.6522",
            "4. close": "145.11",
            "5. adjusted close": "145.11",
            "6. volume": "99890800",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-08": {
            "1. open": "141.58",
            "2. high": "144.06",
            "3. low": "140.665",
            "4. close": "143.24",
            "5. adjusted close": "143.24",
            "6. volume": "105575458",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-07": {
            "1. open": "143.535",
            "2. high": "144.89",
            "3. low": "142.66",
            "4. close": "144.57",
            "5. adjusted close": "144.57",
            "6. volume": "104911589",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-06": {
            "1. open": "140.07",
            "2. high": "143.15",
            "3. low": "140.07",
            "4. close": "142.02",
            "5. adjusted close": "142.02",
            "6. volume": "108181793",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-02": {
            "1. open": "137.9",
            "2. high": "140.0",
            "3. low": "137.745",
            "4. close": "139.96",
            "5. adjusted close": "139.96",
            "6. volume": "78945572",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-07-01": {
            "1. open": "136.6",
            "2. high": "137.33",
            "3. low": "135.76",
            "4. close": "137.27",
            "5. adjusted close": "137.27",
            "6. volume": "52485781",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-30": {
            "1. open": "136.17",
            "2. high": "137.41",
            "3. low": "135.87",
            "4. close": "136.96",
            "5. adjusted close": "136.96",
            "6. volume": "63261393",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-29": {
            "1. open": "134.8",
            "2. high": "136.49",
            "3. low": "134.35",
            "4. close": "136.33",
            "5. adjusted close": "136.33",
            "6. volume": "64556081",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-28": {
            "1. open": "133.41",
            "2. high": "135.245",
            "3. low": "133.35",
            "4. close": "134.78",
            "5. adjusted close": "134.78",
            "6. volume": "62111303",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-25": {
            "1. open": "133.46",
            "2. high": "133.89",
            "3. low": "132.81",
            "4. close": "133.11",
            "5. adjusted close": "133.11",
            "6. volume": "70783746",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-24": {
            "1. open": "134.45",
            "2. high": "134.64",
            "3. low": "132.93",
            "4. close": "133.41",
            "5. adjusted close": "133.41",
            "6. volume": "68710998",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-23": {
            "1. open": "133.77",
            "2. high": "134.32",
            "3. low": "133.23",
            "4. close": "133.7",
            "5. adjusted close": "133.7",
            "6. volume": "60214200",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-22": {
            "1. open": "132.13",
            "2. high": "134.08",
            "3. low": "131.62",
            "4. close": "133.98",
            "5. adjusted close": "133.98",
            "6. volume": "74783618",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-21": {
            "1. open": "130.3",
            "2. high": "132.41",
            "3. low": "129.21",
            "4. close": "132.3",
            "5. adjusted close": "132.3",
            "6. volume": "79663316",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-18": {
            "1. open": "130.71",
            "2. high": "131.51",
            "3. low": "130.24",
            "4. close": "130.46",
            "5. adjusted close": "130.46",
            "6. volume": "108953309",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-17": {
            "1. open": "129.8",
            "2. high": "132.55",
            "3. low": "129.65",
            "4. close": "131.79",
            "5. adjusted close": "131.79",
            "6. volume": "96721669",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-16": {
            "1. open": "130.37",
            "2. high": "130.89",
            "3. low": "128.461",
            "4. close": "130.15",
            "5. adjusted close": "130.15",
            "6. volume": "91339351",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-15": {
            "1. open": "129.94",
            "2. high": "130.6",
            "3. low": "129.39",
            "4. close": "129.64",
            "5. adjusted close": "129.64",
            "6. volume": "62746332",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-14": {
            "1. open": "127.82",
            "2. high": "130.54",
            "3. low": "127.07",
            "4. close": "130.48",
            "5. adjusted close": "130.48",
            "6. volume": "96906490",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-11": {
            "1. open": "126.53",
            "2. high": "127.44",
            "3. low": "126.1",
            "4. close": "127.35",
            "5. adjusted close": "127.35",
            "6. volume": "53522373",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-10": {
            "1. open": "127.02",
            "2. high": "128.19",
            "3. low": "125.94",
            "4. close": "126.11",
            "5. adjusted close": "126.11",
            "6. volume": "71186421",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-09": {
            "1. open": "127.21",
            "2. high": "127.75",
            "3. low": "126.52",
            "4. close": "127.13",
            "5. adjusted close": "127.13",
            "6. volume": "56877937",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-08": {
            "1. open": "126.6",
            "2. high": "128.46",
            "3. low": "126.2101",
            "4. close": "126.74",
            "5. adjusted close": "126.74",
            "6. volume": "74403774",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-07": {
            "1. open": "126.17",
            "2. high": "126.32",
            "3. low": "124.8321",
            "4. close": "125.9",
            "5. adjusted close": "125.9",
            "6. volume": "71057550",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-04": {
            "1. open": "124.07",
            "2. high": "126.16",
            "3. low": "123.85",
            "4. close": "125.89",
            "5. adjusted close": "125.89",
            "6. volume": "75169343",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-03": {
            "1. open": "124.68",
            "2. high": "124.85",
            "3. low": "123.13",
            "4. close": "123.54",
            "5. adjusted close": "123.54",
            "6. volume": "76229170",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-02": {
            "1. open": "124.28",
            "2. high": "125.24",
            "3. low": "124.05",
            "4. close": "125.06",
            "5. adjusted close": "125.06",
            "6. volume": "59278862",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-06-01": {
            "1. open": "125.08",
            "2. high": "125.35",
            "3. low": "123.94",
            "4. close": "124.28",
            "5. adjusted close": "124.28",
            "6. volume": "67637118",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-28": {
            "1. open": "125.57",
            "2. high": "125.8",
            "3. low": "124.55",
            "4. close": "124.61",
            "5. adjusted close": "124.61",
            "6. volume": "71311109",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-27": {
            "1. open": "126.44",
            "2. high": "127.64",
            "3. low": "125.08",
            "4. close": "125.28",
            "5. adjusted close": "125.28",
            "6. volume": "94625601",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-26": {
            "1. open": "126.955",
            "2. high": "127.39",
            "3. low": "126.42",
            "4. close": "126.85",
            "5. adjusted close": "126.85",
            "6. volume": "56575920",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-25": {
            "1. open": "127.82",
            "2. high": "128.32",
            "3. low": "126.32",
            "4. close": "126.9",
            "5. adjusted close": "126.9",
            "6. volume": "72009482",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-24": {
            "1. open": "126.01",
            "2. high": "127.94",
            "3. low": "125.94",
            "4. close": "127.1",
            "5. adjusted close": "127.1",
            "6. volume": "63092945",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-21": {
            "1. open": "127.82",
            "2. high": "128.0",
            "3. low": "125.21",
            "4. close": "125.43",
            "5. adjusted close": "125.43",
            "6. volume": "79295436",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-20": {
            "1. open": "125.23",
            "2. high": "127.72",
            "3. low": "125.1",
            "4. close": "127.31",
            "5. adjusted close": "127.31",
            "6. volume": "76857123",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-19": {
            "1. open": "123.16",
            "2. high": "124.915",
            "3. low": "122.86",
            "4. close": "124.69",
            "5. adjusted close": "124.69",
            "6. volume": "92611989",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-18": {
            "1. open": "126.56",
            "2. high": "126.99",
            "3. low": "124.78",
            "4. close": "124.85",
            "5. adjusted close": "124.85",
            "6. volume": "63342929",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-17": {
            "1. open": "126.82",
            "2. high": "126.93",
            "3. low": "125.17",
            "4. close": "126.27",
            "5. adjusted close": "126.27",
            "6. volume": "74244624",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-14": {
            "1. open": "126.25",
            "2. high": "127.89",
            "3. low": "125.85",
            "4. close": "127.45",
            "5. adjusted close": "127.45",
            "6. volume": "81917951",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-13": {
            "1. open": "124.58",
            "2. high": "126.15",
            "3. low": "124.26",
            "4. close": "124.97",
            "5. adjusted close": "124.97",
            "6. volume": "105861339",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-12": {
            "1. open": "123.4",
            "2. high": "124.64",
            "3. low": "122.25",
            "4. close": "122.77",
            "5. adjusted close": "122.77",
            "6. volume": "112172282",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-11": {
            "1. open": "123.5",
            "2. high": "126.27",
            "3. low": "122.77",
            "4. close": "125.91",
            "5. adjusted close": "125.91",
            "6. volume": "126142826",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-10": {
            "1. open": "129.41",
            "2. high": "129.54",
            "3. low": "126.81",
            "4. close": "126.85",
            "5. adjusted close": "126.85",
            "6. volume": "88071229",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-07": {
            "1. open": "130.85",
            "2. high": "131.2582",
            "3. low": "129.475",
            "4. close": "130.21",
            "5. adjusted close": "130.21",
            "6. volume": "78973273",
            "7. dividend amount": "0.2200",
            "8. split coefficient": "1.0"
        },
        "2021-05-06": {
            "1. open": "127.89",
            "2. high": "129.75",
            "3. low": "127.13",
            "4. close": "129.74",
            "5. adjusted close": "129.521163843",
            "6. volume": "78128334",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-05": {
            "1. open": "129.2",
            "2. high": "130.45",
            "3. low": "127.97",
            "4. close": "128.1",
            "5. adjusted close": "127.883930077",
            "6. volume": "84000900",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-04": {
            "1. open": "131.19",
            "2. high": "131.4899",
            "3. low": "126.7",
            "4. close": "127.85",
            "5. adjusted close": "127.63435176",
            "6. volume": "137564718",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-05-03": {
            "1. open": "132.04",
            "2. high": "134.07",
            "3. low": "131.83",
            "4. close": "132.54",
            "5. adjusted close": "132.316441003",
            "6. volume": "75135100",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-30": {
            "1. open": "131.78",
            "2. high": "133.56",
            "3. low": "131.065",
            "4. close": "131.46",
            "5. adjusted close": "131.23826267",
            "6. volume": "109839466",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-29": {
            "1. open": "136.47",
            "2. high": "137.07",
            "3. low": "132.45",
            "4. close": "133.48",
            "5. adjusted close": "133.254855478",
            "6. volume": "151100953",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-28": {
            "1. open": "134.31",
            "2. high": "135.02",
            "3. low": "133.08",
            "4. close": "133.58",
            "5. adjusted close": "133.354686805",
            "6. volume": "107760097",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-27": {
            "1. open": "135.01",
            "2. high": "135.41",
            "3. low": "134.11",
            "4. close": "134.39",
            "5. adjusted close": "134.163320555",
            "6. volume": "66015804",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-26": {
            "1. open": "134.83",
            "2. high": "135.06",
            "3. low": "133.56",
            "4. close": "134.72",
            "5. adjusted close": "134.492763935",
            "6. volume": "66905069",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-23": {
            "1. open": "132.16",
            "2. high": "135.12",
            "3. low": "132.16",
            "4. close": "134.32",
            "5. adjusted close": "134.093438626",
            "6. volume": "78756779",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-22": {
            "1. open": "133.04",
            "2. high": "134.15",
            "3. low": "131.41",
            "4. close": "131.94",
            "5. adjusted close": "131.71745304",
            "6. volume": "84566456",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-21": {
            "1. open": "132.36",
            "2. high": "133.75",
            "3. low": "131.3001",
            "4. close": "133.5",
            "5. adjusted close": "133.274821743",
            "6. volume": "68847136",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-20": {
            "1. open": "135.02",
            "2. high": "135.53",
            "3. low": "131.81",
            "4. close": "133.11",
            "5. adjusted close": "132.885479568",
            "6. volume": "94812349",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-19": {
            "1. open": "133.51",
            "2. high": "135.47",
            "3. low": "133.34",
            "4. close": "134.84",
            "5. adjusted close": "134.612561527",
            "6. volume": "94264215",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-16": {
            "1. open": "134.3",
            "2. high": "134.67",
            "3. low": "133.28",
            "4. close": "134.16",
            "5. adjusted close": "133.933708503",
            "6. volume": "84922386",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-15": {
            "1. open": "133.82",
            "2. high": "135.0",
            "3. low": "133.64",
            "4. close": "134.5",
            "5. adjusted close": "134.273135015",
            "6. volume": "89347102",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-14": {
            "1. open": "134.94",
            "2. high": "135.0",
            "3. low": "131.655",
            "4. close": "132.03",
            "5. adjusted close": "131.807301234",
            "6. volume": "87222782",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-13": {
            "1. open": "132.44",
            "2. high": "134.66",
            "3. low": "131.93",
            "4. close": "134.43",
            "5. adjusted close": "134.203253086",
            "6. volume": "91266545",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-12": {
            "1. open": "132.52",
            "2. high": "132.85",
            "3. low": "130.63",
            "4. close": "131.24",
            "5. adjusted close": "131.01863375",
            "6. volume": "91419983",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-09": {
            "1. open": "129.8",
            "2. high": "133.04",
            "3. low": "129.47",
            "4. close": "132.995",
            "5. adjusted close": "132.770673541",
            "6. volume": "106686703",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-08": {
            "1. open": "128.95",
            "2. high": "130.39",
            "3. low": "128.52",
            "4. close": "130.36",
            "5. adjusted close": "130.140118071",
            "6. volume": "88844591",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-07": {
            "1. open": "125.83",
            "2. high": "127.92",
            "3. low": "125.14",
            "4. close": "127.9",
            "5. adjusted close": "127.684267423",
            "6. volume": "83466716",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-06": {
            "1. open": "126.5",
            "2. high": "127.13",
            "3. low": "125.65",
            "4. close": "126.21",
            "5. adjusted close": "125.997117994",
            "6. volume": "80171253",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-05": {
            "1. open": "123.87",
            "2. high": "126.1601",
            "3. low": "123.07",
            "4. close": "125.9",
            "5. adjusted close": "125.68764088",
            "6. volume": "88651175",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-04-01": {
            "1. open": "123.66",
            "2. high": "124.18",
            "3. low": "122.49",
            "4. close": "123.0",
            "5. adjusted close": "122.792532393",
            "6. volume": "75089134",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-31": {
            "1. open": "121.65",
            "2. high": "123.52",
            "3. low": "121.15",
            "4. close": "122.15",
            "5. adjusted close": "121.943966112",
            "6. volume": "118323826",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-30": {
            "1. open": "120.11",
            "2. high": "120.4031",
            "3. low": "118.86",
            "4. close": "119.9",
            "5. adjusted close": "119.697761251",
            "6. volume": "85671919",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-29": {
            "1. open": "121.65",
            "2. high": "122.58",
            "3. low": "120.7299",
            "4. close": "121.39",
            "5. adjusted close": "121.185248026",
            "6. volume": "80819203",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-26": {
            "1. open": "120.35",
            "2. high": "121.48",
            "3. low": "118.92",
            "4. close": "121.21",
            "5. adjusted close": "121.005551637",
            "6. volume": "94071234",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-25": {
            "1. open": "119.54",
            "2. high": "121.66",
            "3. low": "119.0",
            "4. close": "120.59",
            "5. adjusted close": "120.386597409",
            "6. volume": "98844681",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-24": {
            "1. open": "122.82",
            "2. high": "122.9",
            "3. low": "120.065",
            "4. close": "120.09",
            "5. adjusted close": "119.887440773",
            "6. volume": "88530485",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-23": {
            "1. open": "123.33",
            "2. high": "124.24",
            "3. low": "122.14",
            "4. close": "122.54",
            "5. adjusted close": "122.333308288",
            "6. volume": "95467142",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-22": {
            "1. open": "120.33",
            "2. high": "123.87",
            "3. low": "120.26",
            "4. close": "123.39",
            "5. adjusted close": "123.181874569",
            "6. volume": "111912284",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-19": {
            "1. open": "119.9",
            "2. high": "121.43",
            "3. low": "119.675",
            "4. close": "119.99",
            "5. adjusted close": "119.787609446",
            "6. volume": "185549522",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-18": {
            "1. open": "122.88",
            "2. high": "123.18",
            "3. low": "120.32",
            "4. close": "120.53",
            "5. adjusted close": "120.326698612",
            "6. volume": "121469755",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-17": {
            "1. open": "124.05",
            "2. high": "125.8599",
            "3. low": "122.336",
            "4. close": "124.76",
            "5. adjusted close": "124.549563751",
            "6. volume": "111932636",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-16": {
            "1. open": "125.7",
            "2. high": "127.22",
            "3. low": "124.715",
            "4. close": "125.57",
            "5. adjusted close": "125.358197501",
            "6. volume": "115227936",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-15": {
            "1. open": "121.41",
            "2. high": "124.0",
            "3. low": "120.42",
            "4. close": "123.99",
            "5. adjusted close": "123.780862532",
            "6. volume": "92590555",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-12": {
            "1. open": "120.4",
            "2. high": "121.17",
            "3. low": "119.16",
            "4. close": "121.03",
            "5. adjusted close": "120.825855248",
            "6. volume": "88105050",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-11": {
            "1. open": "122.54",
            "2. high": "123.21",
            "3. low": "121.26",
            "4. close": "121.96",
            "5. adjusted close": "121.754286591",
            "6. volume": "103026514",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        },
        "2021-03-10": {
            "1. open": "121.69",
            "2. high": "122.17",
            "3. low": "119.45",
            "4. close": "119.98",
            "5. adjusted close": "119.777626313",
            "6. volume": "111943326",
            "7. dividend amount": "0.0000",
            "8. split coefficient": "1.0"
        }
    }
}
  constructor(
    private http: HttpClient
  ) { }

  getQuote(symbol: string): Observable<any> {
    // return this.http.get<any>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=69JF8GHLU88TK05Y`);
    return of(this.fakeResponse);
  }

  getLatestClosePrice(data: any): any {
    const timeSeriesDaily = data['Time Series (Daily)'];
    const result = timeSeriesDaily[Object.keys(timeSeriesDaily)[0]];
    return result['4. close'] ?? 0;
  }

  isPriceHigherThanYesterday(data: any): string {
        const timeSeriesDaily = data['Time Series (Daily)'];
        const today = timeSeriesDaily[Object.keys(timeSeriesDaily)[0]];
        const yesterday = timeSeriesDaily[Object.keys(timeSeriesDaily)[1]];
        return today < yesterday ? 'higher' : 'lower';
    }
}
