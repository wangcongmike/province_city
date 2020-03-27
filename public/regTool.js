;(function(w,undefined)
{
	function RegTool()
	{
		this.tel_reg = /^1[3-8]\d{9}$/;
		this.email_reg = /^\w+\@(?:\w+\.)+[a-zA-Z]{2,5}$/;
		this.cover_tel_reg = /^(\d{3})\d{4}(\d{4})$/;
		this.identifier_reg = /^\d{17}[\dx]$|^\d{15}$/;
		//...more
	} 
	//设施对象的原型对象属性
	RegTool.prototype =
	{
		constructor:'RegTool',
		//1.判断电话号码是否规范
		isTel:function(tel)
		{
			return this.tel_reg.test(tel);
		},

		//2.判断邮箱是否规范
		isEmail:function(email)
		{
			return this.email_reg.test(email);
		},

		//3.将电话号码中间的四位数进行私密处理
		coverTel:function(tel)
		{
			return tel.replace(this.cover_tel_reg,'$1****$2');
		},

		//4.判断身份证号码是否规范
		right_identifier:function(identifier)
		{
			return this.identifier_reg.test(identifier);
		}
		//...more
	}
	w.RegTool = new RegTool();

})(window)