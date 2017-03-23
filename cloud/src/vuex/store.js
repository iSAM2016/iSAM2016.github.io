import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import mResorce from '../components/cloudDisk/mResorce'
import mRubbishResorce from '../components/rubbish/mResorce'
import mProject from '../components/project/mProject.js'
import mTools from '../components/application/mTools'
import mAlltools from '../components/allApplication/mAlltools.js'
import mTasks from '../components/task/mTasks.js'
import mMydata from '../components/mydata/mMydata.js'
import mShopping from '../components/shopping/mShopping.js'
import createLogger from '../plugins/logger.js'



const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    mResorce,
    mRubbishResorce,
    mProject,
    mTools,
    mAlltools,
    mTasks,
    mMydata,
    mShopping,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

