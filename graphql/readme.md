# 减GraphQL

GraphQL是一种用于API的查询语言，由facebook开发并开源。

说起web API， 现在我们能想到的方式就是后端提供一个url，前端通过数据请求就可以获取后端数据。

但是最初的web可不是这个样子，当时的web API概念还很弱，所以网站基本都是通过后端生成模板，直接将数据渲染到html页面中，然后再将页面返回给前端。

## REST（表述性状态传递，Representational State Transfer）

然后REST理论出现了，基于REST理论衍生出了REST API，也就是现在我们常用的数据请求方式。如下面就是一个典型的REST API：

`https://www.foo.con/v1/api/goods?search=as&type=1`

返回数据会是类似这样

```json
[
  {
    uuid: '123123',
    name: 'asd',
    price: '100'
  },
  {
    uuid: '123123',
    name: 'asd1',
    price: '100'
  }
]
```

当然，这块的数据很少，还挺好的。

可是当遇到数据比较多的查询时，后台不管你需不需要，全部给你返回，而且数据层层嵌套，或者对象、数组乱用。

这时候，处理数据真的是一个挺大的工程。

## GraphGL

### 简单实例

GraphQL 使用基于类型系统来执行查询的服务端运行时（类型系统由你的数据定义）。GraphQL 并没有和任何特定数据库或者存储引擎绑定，而是依靠你现有的代码和数据支撑。

一个 GraphQL 服务是通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数。

例如，一个 GraphQL 服务告诉我们当前登录用户是 me，这个用户的名称可能像这样：

```graphql
type Query {
  me: User
}
type User {
  id: ID
  name: String
}
```
每个字段的解析函数可能是如下这样的
```
function Query_me(request) {
  return request.auth.user;
}

function User_name(user) {
  return user.getName();
}
```
一旦一个 GraphQL 服务运行起来（通常在 web 服务的一个 URL 上），它就能接收 GraphQL 查询，并验证和执行。接收到的查询首先会被检查确保它只引用了已定义的类型和字段，然后运行指定的解析函数来生成结果。

如，对于下面这个查询
```graphql
{
  me {
    name
  }
}
```
会产生如下类似结果
```graphql
{
  "me": {
    "name": "Luke Skywalker"
  }
}
```





