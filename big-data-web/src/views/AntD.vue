/**Created by MonTage_fz on 2020/1/6**/
<template>
    <div class="AntD">
        <a-table
            :columns="columns"
            :dataSource="tableResourse"
        >
            <template slot="soldPrice" slot-scope="soldPrice,record">
                <a-input placeholder="Basic usage" v-model="soldPrice"
                         @change="e=>handleChange(e,record)"
                />
            </template>
            <template slot="proportion" slot-scope="proportion,record">
                {{ proportion }}
            </template>
        </a-table>
        <a-button @click="changeTableRow">切换</a-button>

        <a-button v-for="(item,index) of list" :key="index" @click="btn(index)">{{ index+1 }}按钮</a-button>
        <a-button @click="changeStoreName">改变商品名称</a-button>

        <a-select
            labelInValue
            placeholder="Select a person"
            optionFilterProp="children"
            style="width: 200px"
            v-model="selectValue"
            @change="onHandleChange"
        >
            <a-select-option
                v-for="(item,index) of receivingAddressList"
                :key="index"
                :value="item">
                {{ item.receivingAddressShow }}
            </a-select-option>
        </a-select>
    </div>
</template>

<script>
    const columns = [
        {
            title: '序号',
            width: 60,
            align: 'center',
            customRender: function (t, r, index) {
                return parseInt(index) + 1
            },
        },
        {
            title: '主图',
            align: 'center',
            dataIndex: 'mainImg',
            scopedSlots: { customRender: 'avatar' },
        },
        {
            title: '品牌',
            align: 'center',
            dataIndex: 'productBrand',
        },
        {
            title: '商品名称',
            align: 'center',
            dataIndex: 'productName',
        },
        {
            title: '商品规格',
            align: 'center',
            dataIndex: 'productSpecifications',
        },
        {
            title: '计算单位',
            align: 'center',
            dataIndex: 'A',
            scopedSlots: { customRender: 'actionB' },
        },
        {
            title: '市场价',
            align: 'center',
            dataIndex: 'marketPrice',
        },
        {
            title: '经销价',
            align: 'center',
            dataIndex: 'soldPrice',
            scopedSlots: { customRender: 'soldPrice' },
        },
        {
            title: '调价比例',
            align: 'center',
            dataIndex: 'proportion',
            scopedSlots: { customRender: 'proportion' },
        },
    ];
    export default {
        name: 'AntD',
        components: {},
        data() {
            return {
                columns,
                tableResourse: [],
                toggle: false,
                datas: [{
                    productBrand: 1,
                    id: 1,
                    mainImg: 123,
                    productuId: 321,
                    proportion: 100,
                    marketPrice: 2,
                    productName: 111,
                    productSpecifications: 321,
                    soldPrice: 2,
                }, {
                    productBrand: 1,
                    id: 2,
                    mainImg: 123,
                    productuId: 321,
                    proportion: 100,
                    marketPrice: 2,
                    productName: 111,
                    productSpecifications: 321,
                    soldPrice: 29999,
                }, {
                    productBrand: 1,
                    id: 3,
                    mainImg: 123,
                    productuId: 321,
                    proportion: 100,
                    marketPrice: 2,
                    productName: 111,
                    productSpecifications: 321,
                    soldPrice: 29999,
                }],
                list: [1, 2, 3, 4, 5, 6, 7],
                selectValue: [],
                receivingAddressList: [
                    {
                        'receivingAddressShow': '广东省广州市天河区勤天大厦1409 张三 13302538930',
                        'receivingAddress': '广东省广州市天河区勤天大厦1409',
                        'signatory': '张三',
                        'signatoryPhone': '13302538930',
                        'receivingAddressId': '1194903374334066689',
                    },
                    {
                        'receivingAddress': '广东省广州市天河区勤天大厦1410',
                        'receivingAddressShow': '广东省广州市天河区勤天大厦1410 李四 13302538930',
                        'receivingAddressId': '1194903453132455938',
                        'signatory': '李四',
                        'signatoryPhone': '13302538930',
                    },
                    {
                        'receivingAddressShow': '广东省广州市天河区勤天大厦1411 王五 13302538930',
                        'signatoryPhone': '13302538930',
                        'signatory': '王五',
                        'receivingAddressId': '1194904327187660801',
                        'receivingAddress': '广东省广州市天河区勤天大厦1411',
                    },
                ],
            }
        },
        created() {
            this.tableResourse = this.datas.slice(0, 1)
        },
        computed: {},
        methods: {
            handleChange(e, record) {
                console.log(record)
                const id = record.id
                const { soldPrice, marketPrice } = record
                const target = this.datas.filter(v => v.id === id)[0]
                target['soldPrice'] = e.target.value
                target['proportion'] = (e.target.value / marketPrice).toFixed(2)
            },
            changeTableRow() {
                this.tableResourse = this.toggle ? this.datas.slice(0, 1) : this.datas
                this.toggle = !this.toggle
                console.log(this.datas)
            },
            btn(index) {
                alert(index)
            },
            changeStoreName() {
                this.toggle = !this.toggle
                let name = this.toggle ? '商品名称' : '商品'
                let data = this.columns.filter(item => item.title === name)[0]
                if (this.toggle) {
                    data.title = '商品'
                } else {
                    data.title = '商品名称'
                }
            },
            onHandleChange(value, option) {
                console.log(value)
            },
        },
    }
</script>

<style scoped lang="less">
    .AntD {
    }
</style>
