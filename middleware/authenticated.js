export default async function({ store, route, redirect }) {
  // ユーザーが認証されていない場合
  await store.dispatch('auth/onAuth')
    .then(() => {
      if (store.getters['auth/isAutheticated'] && (route.name === 'login' || route.name === 'signup')) {
        return redirect('/home');
      }
    })
    .catch(()=>{
      if (route.name !== "login" && route !== 'signup') {
        return redirect("/login");
      }
    })
}
