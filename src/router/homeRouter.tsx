import React, { Suspense, useCallback } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Loading, ErrorBoundary } from 'src/components'

const [Home, About, NotFound, Echarts, FormTable] = [
  () => import(`src/views/Home/home`),
  () => import(`src/views/Home/about`),
  () => import(`src/views/Home/NotFound`),
  () => import(`src/views/Home/echarts`),
  () => import(`src/views/Home/form`),
].map(item => {
  return React.lazy(item)
})

interface Iprops {
  location: Location
}

const Routers: React.FC<Iprops> = props => {
  /**
   * 切换路由触发
   * 模拟vue的路由守卫
   */
  const onEnter = useCallback(Component => {
    return <Component {...props} />
  }, [])

  return (
    <ErrorBoundary location={props.location}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/home" render={() => onEnter(Home)} />
          <Route exact path="/home/about" render={() => onEnter(About)} />
          <Route exact path="/home/echarts" render={() => onEnter(Echarts)} />
          <Route exact path="/home/form" render={() => onEnter(FormTable)} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
}

export default Routers
