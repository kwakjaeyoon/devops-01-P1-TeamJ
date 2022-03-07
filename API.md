# 쇼핑몰 API

|카테고리|기능|메소드|엔드포인트|요청바디|성공시응답|
|----------|------------------|-------|-------------|------------|-----------|
|조회|특정 물품 조회|GET|/product/product_id|none|200|

    응답
    {
        "_id": "6221b41b20c7ac4aecff55d1",
        "categoryId": "6221b22020c7ac4aecff55c6",
        "foodName": "소고기",
        "price": "10000",
        "remain": "2",
        "confirm": false
    }

|카테고리|기능|메소드|엔드포인트|요청바디|성공시응답|
|----------|------------------|-------|-------------|------------|-----------|
|조회|전체물품 페이지별로 조회|GET|/product/?offset=1&limit=5|none|200|
    [
        {
            "_id": "6221b49120c7ac4aecff55d2",
            "categoryId": "6221b22020c7ac4aecff55c6",
            "foodName": "돼지고기",
            "remain": "5",
            "price": "7000"
        },
        {
            "_id": "6221b4f420c7ac4aecff55d3",
            "categoryId": "6221b23c20c7ac4aecff55c8",
            "foodName": "쌀밥",
            "remain": "3",
            "price": "1000"
        },
        {
            "_id": "6221b51720c7ac4aecff55d4",
            "categoryId": "6221b23c20c7ac4aecff55c8",
            "foodName": "보리밥",
            "remain": "7",
            "price": "1000"
        },
        {
            "_id": "62255e51c480322a8417f907",
            "categoryId": "6221b23020c7ac4aecff55c7",
            "foodName": "오징어젓갈",
            "remain": "3",
            "price": "5000"
        },
        {
            "_id": "62255ebfc480322a8417f908",
            "categoryId": "6221b24820c7ac4aecff55c9",
            "foodName": "총각김치",
            "remain": "5",
            "price": "4000"
        }
    ]

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|추가|카트 담기|POST|/cart|


    Request Body
    {
        "user_id" : {userID},
        "product_id" : {product_id},
        "quantity" : {int},
        "confirm" : {boolean}
    }

    응답 (200)
    {
        "acknowledged": true,
        "insertedId": "6225fb7519dbbb12945c4206"
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|조회|카트에 담긴 물품 조회|GET|/cart|

    Requset Header
    {
        Key : userid,
        Value : {user_id}
    }

    성공시 응답(200)
    {
        "_id": "6223671450df0d96137db197",
        "user_id" : "6221b2f420c7ac4aecff55cc",
        "product_id" : "6221b41b20c7ac4aecff55d1",
        "quantity" : "3",
        "confirm" : false
    }

    실패시 응답(401)
    {
        "message": "인증정보가 입력되지 않았습니다."
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|수정|카트에 담긴 물품 수정|PUT|/cart/:product_id|

    Request Body
    {
        "user_id" : {user_id},
        "product_id" : {product_id},
        "quantity" : {int},
        "confirm" : {boolean}
    }

    응답(201)
    {
        value : {
            "_id": "6223671450df0d96137db197",
            "user_id": "6221b2f420c7ac4aecff55cc",
            "product_id": "6221b41b28c7ac4aecff55d1",
            "quantity": "3",
            "confirm": false
        }
        ok : 1
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|삭제|카트에 담긴 물품 삭제|DELETE|/cart/:cart_id|

    요청헤더
    {
        Key : userid,
        Value : {user_id}
    }

    응답
    {

    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|조회|결제내역 조회|GET|/bill/:userid|

    요청 헤더
    {
        key : userid,
        Value : "user_id"
    }

    응답(200)
    {
        "_id": "62255bcbc480322a8417f905",
        "user_id": "6221b2f420c7ac4aecff55cc",
        "product_id": "6221b4f420c7ac4aecff55d3",
        "quantity": "7",
        "confirm": true
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|삭제|결제 취소|PUT|/bill/{user_id}|

    Request Body
    {
        "confirm" : false
    }

    응답(200)
    {
        value : null,
        ok : 1
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|생성|댓글 생성|POST|/comment|

    Request Body
    {
        "user_id" : {user_id},
        "product_id" : {product_id},
        "comment" : {message},
        "star" : {int}
    }

    응답(201)
    {
        "acknowledged": true,
        "insertedId": "6225bba9af73c71d7f4967eb"
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|수정|댓글 수정|PUT|/comment/comment_id|

    Request body
    {
        "comment" : {message},
        "star" : {int}
    }

    응답(201)
    {
        value : {
            "_id": "6225bba9af73c71d7f4967eb",
            "user_id": "1111",
            "product_id": "6221b41b20c7ac4aecff55d1",
            "star": 5
        }
        ok : 1
    }

|카테고리|기능|메소드|엔드포인트|
|-------|---|-------|------------|
|삭제|댓글 삭제|DELETE|/comment/comment_id|

    요청바디
    {
        none
    }

    응답(204)
    {
        
    }