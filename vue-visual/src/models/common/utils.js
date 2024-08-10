const checkEmail = (rule, value, cb) => {
  const regEmail = /^[\w]+@[\w]+\.[a-zA-Z]+/;
  if (regEmail.test(value)) {
    return cb();
  }
  cb(new Error('请输入合法的邮箱'));
};

const checkPhone = (rule, value, cb) => {
  const regPhone = /^(0|86|17951)?(13\d|15\d|17[678]|18\d|14[57])(\d){8}$/;
  if (regPhone.test(value)) {
    return cb();
  }
  cb(new Error('请输入合法的手机号'));
};

export { checkEmail, checkPhone };
